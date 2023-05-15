import translateRu from './translate/ru.json' assert { type: "json" };
import translateEn from './translate/en.json' assert { type: "json" };

const COUNTRY_IMG_EN = document.querySelector('.country-img-en');
const COUNTRY_IMG_RU = document.querySelector('.country-img-ru');

const header_title = document.querySelector('.header-h1');
const header_job = document.querySelector('.header-h2');

const about = document.querySelector('.about-h2');
const contacts = document.querySelector('.contacts-h2');
const education = document.querySelector('.education-h2');
const skills = document.querySelector('.skills-h2');
const languages = document.querySelector('.languages-h2');
const video = document.querySelector('.video-h2');

const about_description = document.querySelector('.about-description');
const contacts_email = document.querySelector('.contacts-email');
const contacts_phone = document.querySelector('.contacts-phone');
const contacts_vk = document.querySelector('.contacts-vk');

const education_li_1 = document.querySelector('.education-li-1');
const education_li_2 = document.querySelector('.education-li-2');
const education_li_3 = document.querySelector('.education-li-3');
const education_li_4 = document.querySelector('.education-li-4');
const education_li_5 = document.querySelector('.education-li-5');

const language_ru = document.querySelector('.language-p-ru');
const language_en = document.querySelector('.language-p-en');

const about_block = document.querySelector('.about');

if (!localStorage.getItem('local')) localStorage.setItem('local', 'en');
renderLocalSettings();

function renderLocalSettings () {
  switch (localStorage.getItem('local')) {
    case 'en': {
      COUNTRY_IMG_EN.style.opacity = '1';
      COUNTRY_IMG_RU.style.opacity = '0.3';
      about_block.style.marginBottom = "70px";
      translateContent('en');
      break;
    }
    case 'ru' : {
      COUNTRY_IMG_EN.style.opacity = '0.3';
      COUNTRY_IMG_RU.style.opacity = '1';
      about_block.style.marginBottom = "105px";
      translateContent('ru');
      break;
    }
  }
}

COUNTRY_IMG_RU.addEventListener('click', () => {
  localStorage.setItem('local', 'ru');
  renderLocalSettings();
})
COUNTRY_IMG_EN.addEventListener('click', () => {
  localStorage.setItem('local', 'en');
  renderLocalSettings();
})

function translateContent(locale) {
  let translateData;
  if (locale === 'en') translateData = translateEn;
  else if (locale === 'ru') translateData = translateRu;
  else return;

  header_title.innerHTML = translateData.header['header-title'];
  header_job.innerHTML = translateData.header['header-job'];

  about.innerHTML = translateData.aside.about;
  contacts.innerHTML = translateData.aside.contacts;
  education.innerHTML = translateData.aside.education;
  skills.innerHTML = translateData.aside.skills;
  languages.innerHTML = translateData.aside.languages;
  video.innerHTML = translateData.aside.video;

  about_description.innerHTML = translateData.main.about;
  contacts_email.innerHTML = translateData.main.contacts[1];
  contacts_phone.innerHTML = translateData.main.contacts[2];
  contacts_vk.innerHTML = translateData.main.contacts.VK;

  education_li_1.innerHTML = translateData.main.education[1];
  education_li_2.innerHTML = translateData.main.education[2];
  education_li_3.innerHTML = translateData.main.education[3];
  education_li_4.innerHTML = translateData.main.education[4];
  education_li_5.innerHTML = translateData.main.education[5];

  language_ru.innerHTML = translateData.main.languages[1];
  language_en.innerHTML = translateData.main.languages[2];
}