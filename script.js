const CATS = [
  { id:'accessible_design',   label:'Accessible & Diverse Design' },
  { id:'user_research',       label:'User & Media Research' },
  { id:'user_testing',        label:'User Testing' },
  { id:'development',         label:'Development' },
  { id:'human_factors',       label:'Human Factors & Psychology' },
  { id:'product_strategy',    label:'Product Strategy' },
  { id:'web_design',          label:'Web & Product Design' },
  { id:'design_storytelling', label:'Design & Storytelling' },
  { id:'immersive_tech',      label:'Immersive Technologies' },
  { id:'technical_writing',   label:'Technical Writing' },
];

const courses = [
  { name:"Gender and the Digital", num:"1210", dept:"GSWS", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Technologies of the Body", num:"0585", dept:"ENGFLM", credits:3, cats:["accessible_design"], prereq:false, term:"Spring", desc:"" },
  { name:"Practical Issues in Disability", num:"1290", dept:"REHSCI", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Queer and Feminist Media Art", num:"1610", dept:"GSWS", credits:3, cats:["accessible_design"], prereq:true, term:"Spring", desc:"" },
  { name:"Introduction to Information, Systems and Society", num:"0010", dept:"INFSCI", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"Human-Centered Systems", num:"0410", dept:"INFSCI", credits:3, cats:["accessible_design","human_factors","web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Database Management Concepts and Applications", num:"1500", dept:"INFSCI", credits:3, cats:["accessible_design","development"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Writing for Accessibility", num:"0545", dept:"ENGCMP", credits:3, cats:["accessible_design","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Written Professional Communication: Topics in Diversity", num:"0401", dept:"ENGCMP", credits:3, cats:["accessible_design","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"User Research and Reporting", num:"1430", dept:"ENGCMP", credits:3, cats:["user_research","user_testing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Social Computing", num:"1440", dept:"INFSCI", credits:3, cats:["user_research"], prereq:false, term:"Fall", desc:"" },
  { name:"FATE in AI", num:"2185", dept:"ISSP", credits:3, cats:["user_research","immersive_tech"], prereq:false, term:"Spring", desc:"" },
  { name:"Research Writing", num:"0450", dept:"ENGCMP", credits:3, cats:["user_research","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Mass Communication and Society", num:"0320", dept:"COMMRC", credits:3, cats:["user_research"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"Introduction to Contemporary Art", num:"0090", dept:"HAA", credits:3, cats:["user_research"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Media Literacy: Writing and Reading Your Way Through the Digital Landscape", num:"1377", dept:"ENGWRT", credits:3, cats:["user_research","human_factors","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Words and Images", num:"0354", dept:"ENGLIT", credits:3, cats:["user_research","web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"User-Centered Design", num:"1420", dept:"INFSCI", credits:3, cats:["user_testing","development"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Web Site Design and Development", num:"0134", dept:"CS", credits:3, cats:["development"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Web Programming", num:"1059", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Network & Web Data Technologies", num:"1570", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall", desc:"" },
  { name:"Interface Design Methodology", num:"1635", dept:"CS", credits:3, cats:["development","immersive_tech"], prereq:true, term:"Spring", desc:"" },
  { name:"User Experience Engineering", num:"1430", dept:"INFSCI", credits:3, cats:["development","web_design"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Security and Privacy", num:"1600", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Organizational Psychology", num:"1635", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Introduction to Popular Culture", num:"0550", dept:"ENGLIT", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Communication Ethics", num:"1161", dept:"COMMRC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Cognitive Psychology for Non-Majors", num:"0421", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Sensation & Perception", num:"0510", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Learning & Motivation", num:"0405", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Mass Media", num:"0490", dept:"SOC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Introduction to Social Psychology", num:"0105", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"Theories of Persuasion", num:"1111", dept:"COMMRC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Principles of Behavior Modifications", num:"1255", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Persuasive Writing in Advertising", num:"0515", dept:"ENGCMP", credits:3, cats:["human_factors","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Organizational Communication", num:"1102", dept:"COMMRC", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Corporate Storytelling", num:"1104", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall", desc:"" },
  { name:"Introduction to Technical Writing", num:"0600", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"IT Project Management", num:"1460", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Written Professional Communication", num:"0400", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"Theories of Leadership", num:"1100", dept:"LDRSHP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Introduction to Information Security", num:"1049", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Analysis of Information Systems", num:"1400", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"History and Ethics of Advertising and Public Relations", num:"1120", dept:"ENGCMP", credits:3, cats:["product_strategy","technical_writing"], prereq:false, term:"Fall", desc:"" },
  { name:"Managing Projects and Contracts", num:"1315", dept:"PUBSRV", credits:3, cats:["product_strategy"], prereq:false, term:"Spring", desc:"" },
  { name:"Composing Digital Media", num:"0610", dept:"ENGCMP", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Introduction to Contemporary Art", num:"0090", dept:"SA", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Visual Thinking", num:"0110", dept:"SA", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Digital Studio: Imaging", num:"1270", dept:"SA", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Graphics", num:"1014", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Design of Information Systems", num:"1025", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Going Digital: Transformational Change", num:"1031", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
  { name:"Information Visualization", num:"1520", dept:"INFSCI", credits:3, cats:["web_design"], prereq:true, term:"Spring", desc:"" },
  { name:"Virtual Reality", num:"1355", dept:"ENGLIT", credits:3, cats:["web_design","immersive_tech"], prereq:false, term:"Spring", desc:"" },
  { name:"Projects in Digital Composition", num:"1130", dept:"ENGCMP", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Critical Making", num:"0712", dept:"ENGLIT", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
  { name:"Integrating Writing & Design", num:"0520", dept:"ENGCMP", credits:3, cats:["web_design","design_storytelling","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Intro to Audio Storytelling", num:"0710", dept:"ENGWRT", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
  { name:"Digital Narrative and Interactive Design", num:"1201", dept:"ENGCMP", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Game Design", num:"1450", dept:"INFSCI", credits:3, cats:["design_storytelling","immersive_tech"], prereq:false, term:"Fall", desc:"" },
  { name:"Storyboarding", num:"0591", dept:"ENGFLM", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Professional Uses of Social Media", num:"1112", dept:"ENGCMP", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Immersive Media Technologies", num:"1470", dept:"INFSCI", credits:3, cats:["immersive_tech"], prereq:false, term:"Fall", desc:"" },
  { name:"Writing Machines", num:"1207", dept:"ENGCMP", credits:3, cats:["immersive_tech"], prereq:false, term:"Spring", desc:"" },
  { name:"Writing with Data", num:"0521", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Topics in Public and Professional Writing", num:"0550", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Writing Arguments", num:"0560", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Writing for Change", num:"0641", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Spring", desc:"" },
  { name:"Writing for the Public", num:"0420", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Media Relations", num:"1182", dept:"COMMRC", credits:3, cats:["technical_writing"], prereq:false, term:"Spring", desc:"" },
  { name:"Topics in Non-Fiction: Electronic Media", num:"1403", dept:"ENGWRT", credits:3, cats:["technical_writing"], prereq:false, term:"Fall", desc:"" },
];

const catSel = document.getElementById('catSelect');
CATS.forEach(c => { const o = document.createElement('option'); o.value = c.id; o.textContent = c.label; catSel.appendChild(o); });
function catLabel(id) { return CATS.find(c => c.id === id)?.label || id; }

function clearFilters() {
  ['catSelect','creditsSelect','prereqSelect'].forEach(id => document.getElementById(id).value = '');
  render();
}

const openRows = new Set();
function toggle(i) {
  const detail = document.getElementById('detail-' + i);
  const btn = document.getElementById('btn-' + i);
  if (openRows.has(i)) { openRows.delete(i); detail.classList.remove('open'); btn.classList.remove('open'); }
  else { openRows.add(i); detail.classList.add('open'); btn.classList.add('open'); }
}

function render() {
  const cat = document.getElementById('catSelect').value;
  const prereq = document.getElementById('prereqSelect').value;
  openRows.clear();
  const filtered = courses.filter(c => {
    if (cat && !c.cats.includes(cat)) return false;
    if (prereq === 'no' && c.prereq) return false;
    if (prereq === 'yes' && !c.prereq) return false;
    return true;
  });
  document.getElementById('resultsBar').textContent = `${filtered.length} course${filtered.length !== 1 ? 's' : ''} shown`;
  const list = document.getElementById('courseList');
  if (!filtered.length) { list.innerHTML = '<div class="empty-msg">No courses match your filters.</div>'; return; }
  list.innerHTML = filtered.map((c, i) => `
    <div class="course-row">
      <div class="row-summary" onclick="toggle(${i})">
        <div class="course-title-wrap">
          <button class="toggle-btn" id="btn-${i}" aria-label="Expand"><svg viewBox="0 0 10 10"><polyline points="3,2 7,5 3,8"/></svg></button>
          <span class="course-code">${c.dept} ${c.num}</span>
          <span class="course-title">${c.name}</span>
        </div>
        <div class="credits-cell">${c.credits}</div>
        <div class="skill-cell">${catLabel(c.cats[0])}</div>
        <div class="prereq-cell">${c.prereq ? '<span class="prereq-warn">⚠ Prerequisite Required</span>' : '<span class="prereq-none">None</span>'}</div>
      </div>
      <div class="row-detail" id="detail-${i}">
        <p class="detail-desc">${c.desc}</p>
        <div class="detail-meta">
          <span class="detail-term">Term: <span>${c.term}</span></span>
          <a class="peoplesoft-link" href="#" onclick="return false;">Open in PeopleSoft ↗</a>
        </div>
      </div>
    </div>
  `).join('');
}

render();