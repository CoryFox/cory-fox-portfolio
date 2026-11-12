"""Build Cory's editable CV from the portfolio experience content.

Requires python-docx and installed Montserrat / Inter fonts.
Run from the repository root with the primary Python runtime.
Render the resulting DOCX and inspect both pages before replacing the live PDF.
"""
import json
import os
from pathlib import Path
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Mm, Pt, RGBColor

ROOT = Path(__file__).resolve().parents[1]
experience = json.loads((ROOT / 'content/site/experience.json').read_text())
by_company = {entry['company']: entry for entry in experience['timeline']}
NAVY, INK, MUTED = '102A43', '243746', '6E6A63'
doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Mm(210), Mm(297)
sec.top_margin, sec.bottom_margin = Mm(17), Mm(17)
sec.left_margin, sec.right_margin = Mm(19), Mm(19)
sec.header_distance, sec.footer_distance = Mm(8), Mm(8)
width = sec.page_width - sec.left_margin - sec.right_margin


def font(style, family, size, color=INK, bold=False):
    style.font.name = family
    style.font.size = Pt(size)
    style.font.bold = bold
    style.font.color.rgb = RGBColor.from_string(color)
    rpr = style.element.get_or_add_rPr()
    rfonts = rpr.find(qn('w:rFonts'))
    if rfonts is None:
        rfonts = OxmlElement('w:rFonts')
        rpr.append(rfonts)
    for key in list(rfonts.attrib):
        if 'Theme' in key:
            del rfonts.attrib[key]
    for key in ('ascii', 'hAnsi', 'eastAsia', 'cs'):
        rfonts.set(qn('w:' + key), family)

styles = doc.styles
font(styles['Normal'], 'Inter', 10.5)
normal = styles['Normal'].paragraph_format
normal.line_spacing = Pt(14.4)
normal.space_after = Pt(5)
normal.widow_control = True
font(styles['Title'], 'Montserrat', 32, NAVY, True)
styles['Title'].paragraph_format.space_after = Pt(3)
styles['Title'].paragraph_format.line_spacing = 1
font(styles['Subtitle'], 'Inter', 12.5, NAVY)
styles['Subtitle'].font.italic = False
styles['Subtitle'].paragraph_format.space_after = Pt(11)
font(styles['Heading 1'], 'Montserrat', 9.5, NAVY, True)
heading = styles['Heading 1'].paragraph_format
heading.space_before, heading.space_after = Pt(16), Pt(8)
heading.keep_with_next = True
heading.line_spacing = Pt(12)
font(styles['Heading 2'], 'Montserrat', 13, NAVY, True)
role_heading = styles['Heading 2'].paragraph_format
role_heading.space_before, role_heading.space_after = Pt(16), Pt(3)
role_heading.line_spacing = Pt(16)
role_heading.keep_with_next = True
font(styles['List Bullet'], 'Inter', 10.5)
bullet = styles['List Bullet'].paragraph_format
bullet.left_indent, bullet.first_line_indent = Mm(3.5), Mm(-3.5)
bullet.space_after, bullet.line_spacing = Pt(4), Pt(14.4)
bullet.keep_together = True
bullet.widow_control = True
for name in ('Title', 'Subtitle', 'Heading 1', 'Heading 2'):
    ppr = styles[name].element.find(qn('w:pPr'))
    if ppr is not None:
        for border in ppr.findall(qn('w:pBdr')):
            ppr.remove(border)

# Use a restrained dot in the body font, not Word's legacy Symbol bullet.
numbering = doc.part.numbering_part.element
for abstract in numbering.findall(qn('w:abstractNum')):
    for level in abstract.findall(qn('w:lvl')):
        fmt = level.find(qn('w:numFmt'))
        if fmt is not None and fmt.get(qn('w:val')) == 'bullet':
            level.find(qn('w:lvlText')).set(qn('w:val'), '•')
            rpr = level.find(qn('w:rPr'))
            if rpr is None:
                rpr = OxmlElement('w:rPr'); level.append(rpr)
            rf = rpr.find(qn('w:rFonts'))
            if rf is None:
                rf = OxmlElement('w:rFonts'); rpr.append(rf)
            rf.set(qn('w:ascii'), 'Inter'); rf.set(qn('w:hAnsi'), 'Inter')


def section_heading(text, first=False):
    p = doc.add_paragraph(text.upper(), 'Heading 1')
    if first:
        p.paragraph_format.space_before = Pt(0)
    spacing = OxmlElement('w:spacing')
    spacing.set(qn('w:val'), '22')
    p.runs[0]._r.get_or_add_rPr().append(spacing)
    return p


def contact_line(text):
    p = doc.add_paragraph(text)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.line_spacing = Pt(12)
    p.runs[0].font.size = Pt(9)
    p.runs[0].font.color.rgb = RGBColor.from_string(MUTED)
    return p


def expertise(label, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(5)
    run = p.add_run(label + ':  ')
    run.bold = True
    run.font.color.rgb = RGBColor.from_string(NAVY)
    p.add_run(text)


def role(company, bullets=None):
    entry = by_company[company]
    title = entry['role'].replace(' -> ', ' / ')
    doc.add_paragraph(title, 'Heading 2')
    p = doc.add_paragraph()
    p.paragraph_format.keep_with_next = True
    p.paragraph_format.space_after = Pt(7)
    p.paragraph_format.tab_stops.add_tab_stop(width, WD_TAB_ALIGNMENT.RIGHT)
    r = p.add_run(company)
    r.bold = True
    r.font.size = Pt(9.5)
    r.font.color.rgb = RGBColor.from_string(NAVY)
    r = p.add_run('\t' + entry['period'])
    r.font.size = Pt(9)
    r.font.color.rgb = RGBColor.from_string(MUTED)
    for item in (entry['bullets'] if bullets is None else bullets):
        p = doc.add_paragraph(item, 'List Bullet')
        p.paragraph_format.left_indent = Mm(3.5)
        p.paragraph_format.first_line_indent = Mm(-3.5)


doc.add_paragraph('CORY FOX', 'Title')
doc.add_paragraph('Technical Implementation Consultant', 'Subtitle')
contact_line('Sheffield, UK  |  07442 342723  |  coryowenfox@gmail.com  |  coryfox.co.uk')
section_heading('Profile')
doc.add_paragraph(
    'Technical implementation consultant specialising in AI, automation and user adoption. '
    'I combine hands-on software development and UX leadership with client implementation '
    'and a teaching background. I translate business requirements into practical workflows, '
    'connect systems, validate data and create clear guidance for the people using the result.'
)
section_heading('Core expertise')
expertise('AI and implementation', 'Workflow automation, requirements gathering, platform configuration and process improvement.')
expertise('Technical delivery', 'Python, REST APIs, Claude API, Microsoft Graph, Power Query, OData and data validation.')
expertise('People and adoption', 'Stakeholder communication, UX research, usability testing, training resources and technical documentation.')
section_heading('Selected experience')
role('Aptem', by_company['Aptem']['bullets'][1:])
role('FourJaw Manufacturing Analytics', [
    'Progressed from Software Developer to UX/UI Lead, improving onboarding and operational workflows across web and tablet SaaS products.',
    'Led discovery and usability work, collaborating with product and engineering to turn user needs into practical platform improvements.',
    'Developed features using Python, Flask, MongoDB, React and TypeScript; helped modernise the frontend and introduce a consistent design system.'
])

p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(0)
p.paragraph_format.line_spacing = Pt(1)
p.add_run().add_break(WD_BREAK.PAGE)
section_heading('Further experience', first=True)
role('Thrybergh Academy', [
    'Designed and delivered structured learning across technical and practical topics, adapting explanations for different needs and confidence levels.',
    'Created step-by-step resources and video walkthroughs; introduced digital tools and guided learners through their use.',
    'Supported assessment, evidence collection and coursework against qualification requirements.'
])
role('SoloProtect UK', [
    'Designed monitoring, alert and location-aware workflows for a safety-focused platform, supporting clear operational decisions.',
    'Translated UX decisions into production-ready interfaces in a C# .NET and Xamarin environment.'
])
role('Databowl', [
    'Improved onboarding, setup journeys and campaign workflows in a lead management SaaS platform. Returned on a short-term basis from January to July 2021 to support increased workload.',
    'Built Angular interfaces for complex validation and data-led tasks, contributing to workflow design and delivery in a Postgres-backed environment.'
])
role('Relish Learning', [
    'Led client discovery and translated complex subject matter into structured digital learning, using Articulate Storyline, SCORM and custom code.',
    'Delivered learning solutions for organisations including Sainsbury’s, EY and SDL.'
])
section_heading('Education')
p = doc.add_paragraph()
r = p.add_run('BA Graphic Design (User Experience)'); r.bold = True
p.add_run('\nFirst Class Honours | Sheffield Hallam University')
p = doc.add_paragraph()
r = p.add_run('PGCE Secondary Design & Technology'); r.bold = True
p.add_run('\nSheffield Hallam University | Qualified Teacher Status')

# Quiet running reference keeps detached pages identifiable.
footer = sec.footer.paragraphs[0]
footer.style = styles['Normal']
footer.paragraph_format.tab_stops.clear_all()
footer.paragraph_format.tab_stops.add_tab_stop(width, WD_TAB_ALIGNMENT.RIGHT)
footer.paragraph_format.space_before = Pt(0)
r = footer.add_run('CORY FOX  /  coryfox.co.uk\t')
r.font.name, r.font.size = 'Inter', Pt(8)
r.font.color.rgb = RGBColor.from_string(MUTED)
field = OxmlElement('w:fldSimple'); field.set(qn('w:instr'), 'PAGE')
r = OxmlElement('w:r'); props = OxmlElement('w:rPr')
size = OxmlElement('w:sz'); size.set(qn('w:val'), '16'); props.append(size)
color = OxmlElement('w:color'); color.set(qn('w:val'), MUTED); props.append(color)
r.append(props); text = OxmlElement('w:t'); text.text = '1'; r.append(text)
field.append(r); footer._p.append(field)

props = doc.core_properties
props.title = 'Cory Fox CV'
props.subject = 'Technical implementation, AI, automation and user adoption'
props.author = 'Cory Fox'
props.keywords = 'AI transformation, implementation, automation, Aptem, UX, software development'
props.comments = ''
output = Path(os.environ.get('CORY_CV_OUTPUT', str(ROOT / 'docs/cv/cory-fox-cv.docx')))
output.parent.mkdir(parents=True, exist_ok=True)
doc.save(output)
print(output)
