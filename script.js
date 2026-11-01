/* ===================================================
   LAV PANDEY FAQ — SCRIPT
   =================================================== */

// ── 50 FAQs Data ──
const faqs = [
    // ────── PERSONAL (1-8) ──────
    { q: "Who is Lav Pandey?", a: "Lav Pandey is a passionate and driven individual with a love for technology, creativity, and continuous learning. He is known for his curiosity, ambition, and down-to-earth personality.", category: "personal" },
    { q: "Where is Lav Pandey from?", a: "Lav Pandey is from India. He takes great pride in his cultural roots and the values he has grown up with.", category: "personal" },
    { q: "What is Lav Pandey's date of birth?", a: "Lav prefers to keep some personal details private, but he celebrates his birthday with close friends and family every year!", category: "personal" },
    { q: "What languages does Lav speak?", a: "Lav is fluent in Hindi and English. He also has a keen interest in learning new languages and cultures.", category: "personal" },
    { q: "What is Lav's personality like?", a: "Lav is friendly, approachable, hardworking, and always ready to help. He has a great sense of humour and loves connecting with people.", category: "personal" },
    { q: "Does Lav have any pets?", a: "Lav is an animal lover! He enjoys being around animals and believes in treating all living beings with kindness.", category: "personal" },
    { q: "What motivates Lav every day?", a: "The desire to grow, learn something new, and make a positive impact on the world keeps Lav motivated. He draws inspiration from his family and mentors.", category: "personal" },
    { q: "What is Lav's life motto?", a: "\"Dream big, stay humble, and never stop learning.\" Lav truly lives by this philosophy in everything he does.", category: "personal" },

    // ────── EDUCATION (9-15) ──────
    { q: "What is Lav Pandey's educational background?", a: "Lav has pursued his studies with dedication and is focused on building a strong academic foundation in technology and computer science.", category: "education" },
    { q: "What subjects does Lav enjoy the most?", a: "Lav is particularly fond of Computer Science, Mathematics, and subjects that involve logical thinking and problem-solving.", category: "education" },
    { q: "Is Lav a self-learner?", a: "Absolutely! Lav is a passionate self-learner who constantly explores online courses, tutorials, and documentation to expand his knowledge.", category: "education" },
    { q: "What online platforms does Lav use for learning?", a: "Lav learns from platforms like YouTube, freeCodeCamp, Coursera, Udemy, MDN Web Docs, and W3Schools among others.", category: "education" },
    { q: "Does Lav believe in certifications?", a: "Yes, Lav values certifications as proof of learning and commitment. He actively pursues relevant certifications in his fields of interest.", category: "education" },
    { q: "How does Lav manage studies and projects?", a: "Lav follows a disciplined schedule and uses productivity tools to balance his academic commitments with personal projects effectively.", category: "education" },
    { q: "What advice does Lav give to students?", a: "\"Focus on understanding concepts, not just passing exams. Build projects, stay curious, and never compare your journey with others.\"", category: "education" },

    // ────── TECH & SKILLS (16-24) ──────
    { q: "What programming languages does Lav know?", a: "Lav is skilled in HTML, CSS, JavaScript, and is continuously expanding his tech stack by learning new languages and frameworks.", category: "tech" },
    { q: "Does Lav know any frameworks?", a: "Yes! Lav works with Bootstrap for responsive design and is exploring modern frameworks like React.js to build dynamic web applications.", category: "tech" },
    { q: "What tools does Lav use for development?", a: "Lav uses VS Code as his primary editor, along with Git & GitHub for version control, Chrome DevTools for debugging, and Vercel for deployment.", category: "tech" },
    { q: "Is Lav interested in AI and Machine Learning?", a: "Absolutely! Lav is fascinated by AI and ML technologies and is exploring how they can be used to solve real-world problems.", category: "tech" },
    { q: "Does Lav contribute to open source?", a: "Lav believes in the open-source community and looks forward to contributing to projects that align with his skills and interests.", category: "tech" },
    { q: "What is Lav's favourite project so far?", a: "This very FAQ page! Lav loves building creative, interactive web experiences that combine design, animation, and clean code.", category: "tech" },
    { q: "How does Lav stay updated with tech trends?", a: "Lav follows tech blogs, YouTube channels, Twitter/X threads, and developer communities on Discord and Reddit to stay on top of the latest trends.", category: "tech" },
    { q: "Does Lav know about databases?", a: "Lav has explored database concepts and is learning about SQL and NoSQL databases to build full-stack applications in the future.", category: "tech" },
    { q: "What is Lav's approach to problem-solving?", a: "Lav follows a structured approach: understand the problem, break it into smaller parts, research, code a solution, test, and iterate.", category: "tech" },

    // ────── CAREER (25-32) ──────
    { q: "What is Lav's dream job?", a: "Lav aspires to become a skilled full-stack developer or software engineer working on impactful products at a top tech company.", category: "career" },
    { q: "Has Lav done any internships?", a: "Lav is actively building his portfolio and seeking opportunities to gain real-world experience through internships and freelance work.", category: "career" },
    { q: "Does Lav freelance?", a: "Lav is open to freelance opportunities, especially in web development and design, where he can apply his skills to real client projects.", category: "career" },
    { q: "What kind of projects does Lav want to work on?", a: "Lav is drawn to projects that involve creative UI/UX, interactive websites, educational platforms, and anything that solves real problems.", category: "career" },
    { q: "Where does Lav see himself in 5 years?", a: "In 5 years, Lav envisions himself as a proficient developer with a strong portfolio, working on meaningful projects and inspiring others to learn tech.", category: "career" },
    { q: "Does Lav want to start his own company?", a: "Entrepreneurship excites Lav! He dreams of building a tech startup someday that creates innovative solutions for everyday challenges.", category: "career" },
    { q: "How can someone hire or collaborate with Lav?", a: "You can reach out to Lav through his social media profiles or email. He is always open to exciting collaborations and opportunities!", category: "career" },
    { q: "Does Lav believe in networking?", a: "100%! Lav believes that building genuine connections with like-minded people is one of the most valuable things you can do for your career.", category: "career" },

    // ────── HOBBIES (33-39) ──────
    { q: "What does Lav do in his free time?", a: "Lav enjoys coding side projects, watching tech videos, listening to music, exploring new apps, and spending quality time with friends and family.", category: "hobbies" },
    { q: "Does Lav play video games?", a: "Yes! Lav enjoys gaming as a way to relax and unwind. He appreciates games with great storytelling and immersive gameplay.", category: "hobbies" },
    { q: "Does Lav like music?", a: "Lav loves music! He listens to a wide variety of genres and often has music playing in the background while coding.", category: "hobbies" },
    { q: "Is Lav into fitness?", a: "Lav understands the importance of physical health and tries to maintain an active lifestyle alongside his tech pursuits.", category: "hobbies" },
    { q: "Does Lav watch movies or series?", a: "Yes, Lav enjoys watching movies and web series, especially sci-fi, thriller, and tech-related content that sparks his imagination.", category: "hobbies" },
    { q: "Does Lav like reading?", a: "Lav enjoys reading tech blogs, documentation, and self-improvement articles. He is also exploring books on productivity and entrepreneurship.", category: "hobbies" },
    { q: "Does Lav enjoy travelling?", a: "Lav loves the idea of exploring new places, experiencing different cultures, and finding inspiration in the world around him.", category: "hobbies" },

    // ────── GOALS (40-45) ──────
    { q: "What are Lav's short-term goals?", a: "Lav's short-term goals include mastering JavaScript, building impressive portfolio projects, and landing his first professional role in tech.", category: "goals" },
    { q: "What are Lav's long-term goals?", a: "Long-term, Lav wants to become a recognised developer, build products that impact millions, and give back to the community through mentoring.", category: "goals" },
    { q: "Does Lav want to teach or mentor others?", a: "Absolutely! Lav is passionate about sharing knowledge and helping beginners navigate their journey in tech.", category: "goals" },
    { q: "What skills does Lav want to learn next?", a: "Lav is planning to dive deeper into React.js, Node.js, databases, API development, and eventually explore cloud computing and DevOps.", category: "goals" },
    { q: "Does Lav have a YouTube or blog?", a: "Lav is considering starting a YouTube channel or blog to document his learning journey and share tips with the community.", category: "goals" },
    { q: "What impact does Lav want to create?", a: "Lav wants to inspire young people to pursue tech, build accessible tools for underserved communities, and prove that passion beats privilege.", category: "goals" },

    // ────── FUN FACTS (46-50) ──────
    { q: "What is a fun fact about Lav?", a: "Lav can spend hours perfecting a single CSS animation — and he genuinely enjoys every second of it!", category: "fun" },
    { q: "What is Lav's favourite colour?", a: "Lav loves purple and blue tones — which is clearly reflected in the design of this very page! 💜", category: "fun" },
    { q: "Does Lav have a favourite quote?", a: "\"The only way to do great work is to love what you do.\" — Steve Jobs. This resonates deeply with Lav.", category: "fun" },
    { q: "What's the most random thing about Lav?", a: "Lav once stayed up all night debugging a single semicolon issue — and felt like a superhero when he finally found it. 🦸‍♂️", category: "fun" },
    { q: "If Lav could have any superpower, what would it be?", a: "The ability to learn any skill instantly! Imagine mastering every programming language in a snap. 🚀", category: "fun" },
];


// ── DOM References ──
const accordionEl = document.getElementById('faqAccordion');
const filterBtns  = document.querySelectorAll('.filter-btn');
const countBadge  = document.getElementById('faqCountBadge');

// ── Build Accordion Items ──
function buildAccordion() {
    accordionEl.innerHTML = '';
    faqs.forEach((faq, i) => {
        const id = `faq${i}`;
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.setAttribute('data-category', faq.category);
        item.innerHTML = `
            <h2 class="accordion-header" id="heading${id}">
                <button class="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapse${id}"
                        aria-expanded="false" aria-controls="collapse${id}">
                    <span class="faq-number">${i + 1}</span>
                    <span class="faq-category-badge ${faq.category}">${faq.category}</span>
                    <span>${faq.q}</span>
                </button>
            </h2>
            <div id="collapse${id}" class="accordion-collapse collapse"
                 aria-labelledby="heading${id}" data-bs-parent="#faqAccordion">
                <div class="accordion-body">${faq.a}</div>
            </div>
        `;
        accordionEl.appendChild(item);
    });
}

// ── Filter Logic ──
function filterFAQs(category) {
    const items = document.querySelectorAll('.accordion-item');
    let visibleCount = 0;

    items.forEach((item, idx) => {
        const cat = item.getAttribute('data-category');
        const shouldShow = category === 'all' || cat === category;

        // remove old animation classes
        item.classList.remove('faq-hide', 'faq-show');

        if (shouldShow) {
            visibleCount++;
            // small stagger
            item.style.animationDelay = `${visibleCount * 0.03}s`;
            item.classList.add('faq-show');
            item.style.display = '';

            // close any open accordion
            const collapse = item.querySelector('.accordion-collapse');
            if (collapse && collapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse, { toggle: false });
                bsCollapse.hide();
            }
        } else {
            item.classList.add('faq-hide');
            // hide after animation
            setTimeout(() => {
                item.style.display = 'none';
            }, 350);
        }
    });

    countBadge.textContent = `Showing ${visibleCount} of ${faqs.length} FAQs`;
}

// ── Filter Button Clicks ──
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterFAQs(btn.getAttribute('data-category'));
    });
});

// ── Sticky bar shadow on scroll ──
window.addEventListener('scroll', () => {
    const bar = document.querySelector('.filter-bar-section');
    if (window.scrollY > 200) {
        bar.classList.add('scrolled');
    } else {
        bar.classList.remove('scrolled');
    }
});

// ── 2-Second Loading Screen (Only GIF) ──
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 2000);
    }
});

// ── Init ──
buildAccordion();
filterFAQs('all');

