document.addEventListener("DOMContentLoaded", function () {

    const content = document.getElementById("content");
    const links = document.querySelectorAll(".nav-link");

    const sections = {
        about: ` 
              <div class="fade-in">
                  <h2>About Me</h2>
                  <div style="text-align: left; max-width: 800px; margin: 0 auto;">
                      <p style="margin: 20px 0;">
                          👋 Halo! Aku <span class="typing-text"><b>Febriana</b> </span>, 
                          <span>Bachelor of Information Systems from Gunadarma University, I am actively involved in various organizations and
                            am good at working in teams. I am strongly interested in web design, front-end development, project
                            management, and other related fields. I can build interactive websites and understand the principles of good
                            design. I apply a proactive approach to problem-solving and actively participate in various courses to improve my
                            skills and knowledge. I actively seek opportunities to contribute to a professional environment where I can further
                            develop my skills and contribute to the technology industry by building useful creative solution
                      </p></span>
                      
                      <h3 style="margin: 20px 0;">🚀 What I Do</h3>
                      <ul style="list-style: none; padding: 0;">
                          <li style="margin: 10px 0;">💻 Frontend Development: HTML, CSS, JavaScript, Bootstrap.css, Tailwind.css</li>
                          <li style="margin: 10px 0;">🌐 Backend Development: Node.js, React.js, Vue.js, Python, PHP, MySql</li>
                          <li style="margin: 10px 0;">🎨 UI/UX Design: Figma</li>
                          
                      </ul>
  
                      <h3 style="margin: 20px 0;">🎯 Current Focus</h3>
                      <p>Currently sharpening my skills in frontend technologies, mastering modern frameworks like 
                      React.js and Vue.js, and exploring the integration of responsive design, accessibility, 
                      and performance optimization in web development.</p>
                  </div>
              </div>
          `,
        projects: `
              <div class="fade-in">
                  <h2>Projects</h2>
                  <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 2rem 0; text-align: left;">
                    <div class="satu">
                        <div class="pertama"><h3 style="color: #fff;">✨ Aplus Project</h3> </div>
                        <div class="content" style="color: #666; ">
                         <p style="margin-left: 22px; padding: 20px;">Project A Plus is a tech-focused bootcamp offering hands-on learning in Android, 
                          web development, and cybersecurity to empower future IT professionals.
                          <br />
                          🛠️ React.js, Vite, Tailwind.css
                          </p>
                            
                            <div style="margin-left: 22px; ">
                                <a href="https://github.com/frxeve/FE-Test" target="_blank" style="color: #007BFF; text-decoration: none; margin-right: 15px; display: block; margin-bottom: 5px;">
                                    🌐 View on GitHub
                                </a>
                                <a href="https://aplus-project-six.vercel.app/" target="_blank" style="color: #007BFF; text-decoration: none; margin-right: 15px; display: block; margin-bottom: 5px;"">
                                    🚀 View Demo
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    


                    <div class="dua">
                        <div class="kedua">
                            <h3 style="color: #fff;">✨ Japan Travel Agency</h3>
                        </div>
                        <div class="content" style="color: #666;">
                            <p style="margin-left: 22px; padding: 20px;">Japan Travel Agency is a one-stop platform for booking flights, 
                            hotels, and destinations across Japan, making your travel planning seamless and hassle-free.
                          <br />
                          🛠️ Bootstrap, JQuery
                          </p>
                            <div style="margin-left: 22px; ">
                                <a href="https://github.com/frxeve/Japan-travel-agency" target="_blank" style="color: #007BFF; text-decoration: none; margin-right: 15px; display: block; margin-bottom: 5px;">
                                    🌐 View on GitHub
                                </a>
                                <a href="https://japan-travel-agency.vercel.app/" target="_blank" style="color: #007BFF; text-decoration: none; margin-right: 15px; display: block; margin-bottom: 5px;"">
                                    🚀 View Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="tiga">
                        <div class="ketiga">
                            <h3 style="color: #fff;">✨ Coffee Cuy Application</h3>
                        </div>
                        <div class="content" style="color: #666;">
                            <p style="margin-left: 22px; padding: 20px;"> The design of the Coffee Cuy mobile application. 
                            An online coffee ordering application that can be customized. 
                          <br />
                          🛠️ Figma
                          </p>
                            <div style="margin-left: 22px; ">
                                <a href="https://drive.google.com/file/d/15ThyLPLjl5qJz3Ehs5AGqN4DiQvGvV6O/view" target="_blank" style="color: #007BFF; text-decoration: none; margin-right: 15px; display: block; margin-bottom: 5px;">
                                    🌐 View on Documentation
                                </a>
                                <a href="https://www.figma.com/proto/XOo1MXHads7iEnF560peRy/Latihan-Coffee-Cuy?page-id=50%3A2&node-id=177-21&node-type=frame&viewport=432%2C296%2C0.15&t=mcZyDQMuWCiYFVJ4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=177%3A21&show-proto-sidebar=1" target="_blank" style="color: #007BFF; text-decoration: none; margin-right: 15px; display: block; margin-bottom: 5px;"">
                                    🚀 View Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="fourth-project">
                        <div class="fourth">
                            <h3 style="color: #fff;">✨a Personal Bio Website Project</h3>
                        </div>
                        <div class="content" style="color: #666;">
                            <p style="margin-left: 22px; padding: 20px;"> A Personal Bio Website created as a first project using HTML,
                             CSS, showcasing introductory web development skills learned from Dicoding.
                          <br />
                          🛠️ HTML, CSS 
                          </p>
                            <div style="margin-left: 22px; ">
                                <a href="https://github.com/frxeve/website-biodata-diri-dicoding" target="_blank" style="color: #007BFF; text-decoration: none; margin-right: 15px; display: block; margin-bottom: 5px;">
                                    🌐 View on GitHub
                                </a>
                                <a href="https://my-first-web-ruddy.vercel.app/" target="_blank" style="color: #007BFF; text-decoration: none; margin-right: 15px; display: block; margin-bottom: 5px;"">
                                    🚀 View Demo
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          `,
        contact: `
              <div class="fade-in">
                  <h2>Let’s Collaborate!</h2>
                  <div style="max-width: 600px; margin: 2rem auto; text-align: left;">
                      <p style="margin: 1rem 0;">As a frontend developer, I’m passionate about building seamless user experiences and 
                      innovative web solutions. Whether you’re working on a project that needs a creative touch or want to dive into a 
                      discussion about web technologies, I’d love to connect.
                        <br/>
                        Reach out anytime—I’m always happy to collaborate!
                        </p>
                      
                      <div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0;">
                          <a href="mailto:febrianaa2722@gmail.com" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                              📧 febrianaa2722@gmail.com
                          </a>
                          <a href="https://www.linkedin.com/in/febrianaa/" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                              💼 LinkedIn: febrianaa
                          </a>
                          <a href="https://github.com/frxeve" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                              🐱 GitHub: @frxeve
                          </a>
                          <a href="https://instagram.com/feebs.ana" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                              🐦 Instagram: @feebs.ana
                          </a>
                      </div>
  
                      <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                          <h3 style="margin-bottom: 1rem;">🌟 Current Status</h3>
                          <p>Currently a programming teacher at an international school and actively seeking full-time opportunities as a frontend developer!</p>
                      </div>
                  </div>
              </div>
          `,
    };

    function showSection(sectionId) {
        content.innerHTML = sections[sectionId];
    }

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(link.dataset.section);
        });
    });

    showSection("about");
});