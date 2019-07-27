




import Collapsible from 'react-collapsible';
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/FAQ/faq.css';
import React, {Component} from 'react';

import imaa from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/img-faq.png';







class Faq extends Component{

    render(){
        return(
            <div> <img alt={""}  src={imaa}/>
                <Collapsible trigger="Start here">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>

                <section className="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
                    <ul className="cd-faq__categories">
                        <li><a className="cd-faq__category cd-faq__category-selected truncate" href="#basics">Basics</a>
                        </li>
                        <li><a className="cd-faq__category truncate" href="#mobile">Mobile</a></li>
                        <li><a className="cd-faq__category truncate" href="#account">Account</a></li>
                        <li><a className="cd-faq__category truncate" href="#payments">Payments</a></li>
                        <li><a className="cd-faq__category truncate" href="#privacy">Privacy</a></li>
                        <li><a className="cd-faq__category truncate" href="#delivery">Delivery</a></li>
                    </ul>


                    <div className="cd-faq__items">
                        <ul id="basics" className="cd-faq__group">
                            <li className="cd-faq__title"><h2>Basics</h2></li>
                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How do I change my password?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quidem
                                            blanditiis delectus corporis, possimus officia sint sequi ex tenetur id
                                            impedit est pariatur iure animi non a ratione reiciendis nihil sed
                                            consequatur atque repellendus fugit perspiciatis rerum et. Dolorum
                                            consequuntur fugit deleniti, soluta fuga nobis. Ducimus blanditiis velit sit
                                            iste delectus obcaecati debitis omnis, assumenda accusamus cumque
                                            perferendis eos aut quidem! Aut, totam rerum, cupiditate quae aperiam
                                            voluptas rem inventore quas, ex maxime culpa nam soluta labore at amet nihil
                                            laborum? Explicabo numquam, sit fugit, voluptatem autem atque quis quam
                                            voluptate fugiat earum rem hic, reprehenderit quaerat tempore at.
                                            Aperiam.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How do I sign up?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate et
                                            laudantium esse adipisci consequatur modi possimus accusantium vero atque
                                            excepturi nobis in doloremque repudiandae soluta non minus dolore voluptatem
                                            enim reiciendis officia voluptates, fuga ullam? Voluptas reiciendis cumque
                                            molestiae unde numquam similique quas doloremque non, perferendis doloribus
                                            necessitatibus itaque dolorem quam officia atque perspiciatis dolore
                                            laudantium dolor voluptatem eligendi? Aliquam nulla unde voluptatum
                                            molestiae, eos fugit ullam, consequuntur, saepe voluptas quaerat deleniti.
                                            Repellendus magni sint temporibus, accusantium rem commodi?</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>Can I remove a post?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How do reviews work?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>
                        </ul>


                        <ul id="mobile" className="cd-faq__group">
                            <li className="cd-faq__title"><h2>Mobile</h2></li>
                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How does syncing work?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quidem
                                            delectus rerum eligendi mollitia, repudiandae quae beatae. Et repellat quam
                                            atque corrupti iusto architecto impedit explicabo repudiandae qui similique
                                            aut iure ipsum quis inventore nulla error aliquid alias quia dolorem dolore,
                                            odio excepturi veniam odit veritatis. Quo iure magnam, et cum. Laudantium,
                                            eaque non? Tempore nihil corporis cumque dolor ipsum accusamus sapiente
                                            aliquid quis ea assumenda deserunt praesentium voluptatibus, accusantium a
                                            mollitia necessitatibus nostrum voluptatem numquam modi ab, sint rem.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How do I upload files from my phone or tablet?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempore,
                                            placeat quisquam rerum! Eligendi fugit dolorum tenetur modi fuga nisi rerum,
                                            autem officiis quaerat quos. Magni quia, quo quibusdam odio. Error magni
                                            aperiam amet architecto adipisci aspernatur! Officia, quaerat magni
                                            architecto nostrum magnam fuga nihil, ipsum laboriosam similique
                                            voluptatibus facilis nobis? Eius non asperiores, nesciunt suscipit veniam
                                            blanditiis veritatis provident possimus iusto voluptas, eveniet architecto
                                            quidem quos molestias, aperiam eum reprehenderit dolores ad deserunt eos
                                            amet. Vero molestiae commodi unde dolor dicta maxime alias, velit, nesciunt
                                            cum dolorem, ipsam soluta sint suscipit maiores mollitia assumenda ducimus
                                            aperiam neque enim! Quas culpa dolorum ipsam? Ipsum voluptatibus numquam
                                            natus? Eligendi explicabo eos, perferendis voluptatibus hic sed ipsam rerum
                                            maiores officia! Beatae, molestias!</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How do I link to a file or folder?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>
                        </ul>


                        <ul id="account" className="cd-faq__group">
                            <li className="cd-faq__title"><h2>Account</h2></li>
                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How do I change my password?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis earum
                                            autem consectetur labore eius tenetur esse, in temporibus sequi cum
                                            voluptatem vitae repellat nostrum odio perspiciatis dolores recusandae
                                            necessitatibus, unde, deserunt voluptas possimus veniam magni soluta
                                            deleniti! Architecto, quidem, totam. Fugit minus odit unde ea cupiditate ab
                                            aperiam sed dolore facere nihil laboriosam dolorum repellat deleniti aliquam
                                            fugiat laudantium delectus sint iure odio, necessitatibus rem quisquam!
                                            Ipsum praesentium quam nisi sint, impedit sapiente facilis laudantium
                                            mollitia quae fugiat similique. Dolor maiores aliquid incidunt commodi
                                            doloremque rem! Quaerat, debitis voluptatem vero qui enim, sunt reiciendis
                                            tempore inventore maxime quasi fugiat accusamus beatae modi voluptates iste
                                            officia esse soluta tempora labore quisquam fuga, cum. Sint nemo iste nulla
                                            accusamus quam qui quos, vero, minus id. Eius mollitia consequatur fugit nam
                                            consequuntur nesciunt illo id quis reprehenderit obcaecati voluptates
                                            corrupti, minus! Possimus, perspiciatis!</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How do I delete my account?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tempore
                                            soluta, minus magnam non blanditiis dolore, in nam voluptas nobis minima
                                            deserunt deleniti id animi amet, suscipit consequuntur corporis nihil
                                            laborum facere temporibus. Qui inventore, doloribus facilis, provident
                                            soluta voluptas excepturi perspiciatis fugiat odit vero! Optio assumenda
                                            animi at! Assumenda doloremque nemo est sequi eaque, ipsum id, labore rem
                                            nisi, amet similique vel autem dolore totam facilis deserunt. Mollitia non
                                            ut libero unde accusamus praesentium sint maiores, illo, nemo aliquid?</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger"
                                   href="#0"><span>How do I change my account settings?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger"
                                   href="#0"><span>I forgot my password. How do I reset it?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum at aspernatur
                                            iure facere ab a corporis mollitia molestiae quod omnis minima, est labore
                                            quidem nobis accusantium ad totam sunt doloremque laudantium impedit
                                            similique iste quasi cum! Libero fugit at praesentium vero. Maiores non
                                            consequuntur rerum, nemo a qui repellat quibusdam architecto voluptatem?
                                            Sequi, possimus, cupiditate autem soluta ipsa rerum officiis cum libero
                                            delectus explicabo facilis, odit ullam aperiam reprehenderit! Vero ad non
                                            harum veritatis tempore beatae possimus, ex odio quo.</p>
                                    </div>
                                </div>

                            </li>
                        </ul>


                        <ul id="payments" className="cd-faq__group">
                            <li className="cd-faq__title"><h2>Payments</h2></li>
                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>Can I have an invoice for my subscription?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quidem
                                            delectus rerum eligendi mollitia, repudiandae quae beatae. Et repellat quam
                                            atque corrupti iusto architecto impedit explicabo repudiandae qui similique
                                            aut iure ipsum quis inventore nulla error aliquid alias quia dolorem dolore,
                                            odio excepturi veniam odit veritatis. Quo iure magnam, et cum. Laudantium,
                                            eaque non? Tempore nihil corporis cumque dolor ipsum accusamus sapiente
                                            aliquid quis ea assumenda deserunt praesentium voluptatibus, accusantium a
                                            mollitia necessitatibus nostrum voluptatem numquam modi ab, sint rem.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>Why did my credit card or PayPal payment fail?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur accusantium
                                            dolorem vel, ad, nostrum natus eos, nemo placeat quos nisi architecto rem
                                            dolorum amet consectetur molestiae reprehenderit cum harum commodi beatae
                                            necessitatibus. Mollitia a nostrum enim earum minima doloribus illum autem,
                                            provident vero et, aspernatur quae sunt illo dolorem. Corporis blanditiis,
                                            unde, neque, adipisci debitis quas ullam accusantium repudiandae eum nostrum
                                            quis! Velit esse harum qui, modi ratione debitis alias laboriosam minus
                                            eaque, quod, itaque labore illo totam aut quia fuga nemo. Perferendis ipsa
                                            laborum atque assumenda tempore aspernatur a eos harum non id commodi
                                            excepturi quaerat ullam, explicabo, incidunt ipsam, accusantium quo magni
                                            ut! Ratione, magnam. Delectus nesciunt impedit praesentium sed, aliquam
                                            architecto dolores quae, distinctio consectetur obcaecati esse, consequuntur
                                            vel sit quis blanditiis possimus dolorum. Eaque architecto doloremque
                                            aliquid quae cumque, vitae perferendis enim, iure fugiat, soluta aut!</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>Why does my bank statement show multiple charges for one upgrade?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>
                        </ul>


                        <ul id="privacy" className="cd-faq__group">
                            <li className="cd-faq__title"><h2>Privacy</h2></li>
                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>Can I specify my own private key?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quidem
                                            delectus rerum eligendi mollitia, repudiandae quae beatae. Et repellat quam
                                            atque corrupti iusto architecto impedit explicabo repudiandae qui similique
                                            aut iure ipsum quis inventore nulla error aliquid alias quia dolorem dolore,
                                            odio excepturi veniam odit veritatis. Quo iure magnam, et cum. Laudantium,
                                            eaque non? Tempore nihil corporis cumque dolor ipsum accusamus sapiente
                                            aliquid quis ea assumenda deserunt praesentium voluptatibus, accusantium a
                                            mollitia necessitatibus nostrum voluptatem numquam modi ab, sint rem.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>My files are missing! How do I get them back?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How can I access my account data?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus magni vero
                                            deserunt enim et quia in aliquam, rem tempore voluptas illo nisi veritatis
                                            quas quod placeat ipsa! Error qui harum accusamus incidunt at libero ipsum,
                                            suscipit dolorum esse explicabo in eius voluptates quidem voluptatem
                                            inventore amet eaque deserunt veniam dignissimos excepturi? Dolore, quo amet
                                            nostrum autem nemo. Sit nam assumenda, corporis ea sunt distinctio nostrum
                                            doloribus alias, beatae nesciunt dolore saepe consequuntur minima eveniet
                                            porro dolor officiis maiores ab obcaecati officia enim aliquam. Itaque fuga
                                            molestiae hic accusantium atque corporis quia id sequi enim vero? Hic
                                            aperiam sint facilis aliquam quia, accusamus tenetur earum totam enim est,
                                            error. Iusto, reiciendis necessitatibus molestias. Voluptatibus eos
                                            explicabo repellat nesciunt nam vero minima.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How can I control if other search engines can link to my profile?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>
                        </ul>


                        <ul id="delivery" className="cd-faq__group">
                            <li className="cd-faq__title"><h2>Delivery</h2></li>
                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>What should I do if my order hasn't been delivered yet?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quidem
                                            delectus rerum eligendi mollitia, repudiandae quae beatae. Et repellat quam
                                            atque corrupti iusto architecto impedit explicabo repudiandae qui similique
                                            aut iure ipsum quis inventore nulla error aliquid alias quia dolorem dolore,
                                            odio excepturi veniam odit veritatis. Quo iure magnam, et cum. Laudantium,
                                            eaque non? Tempore nihil corporis cumque dolor ipsum accusamus sapiente
                                            aliquid quis ea assumenda deserunt praesentium voluptatibus, accusantium a
                                            mollitia necessitatibus nostrum voluptatem numquam modi ab, sint rem.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How can I find your international delivery information?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>Who takes care of shipping?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger"
                                   href="#0"><span>How do returns or refunds work?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quidem
                                            delectus rerum eligendi mollitia, repudiandae quae beatae. Et repellat quam
                                            atque corrupti iusto architecto impedit explicabo repudiandae qui similique
                                            aut iure ipsum quis inventore nulla error aliquid alias quia dolorem dolore,
                                            odio excepturi veniam odit veritatis. Quo iure magnam, et cum. Laudantium,
                                            eaque non? Tempore nihil corporis cumque dolor ipsum accusamus sapiente
                                            aliquid quis ea assumenda deserunt praesentium voluptatibus, accusantium a
                                            mollitia necessitatibus nostrum voluptatem numquam modi ab, sint rem.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger"
                                   href="#0"><span>How do I use shipping profiles?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How does your UK Next Day Delivery service work?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>How does your Next Day Delivery service work?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>When will my order arrive?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>

                            <li className="cd-faq__item">
                                <a className="cd-faq__trigger" href="#0"><span>When will my order ship?</span></a>
                                <div className="cd-faq__content">
                                    <div className="text-component">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                            provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur
                                            magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero
                                            quaerat distinctio velit.</p>
                                    </div>
                                </div>

                            </li>
                        </ul>

                    </div>


                    <a href="#0" className="cd-faq__close-panel text-replace">Close</a>

                    <div className="cd-faq__overlay" aria-hidden="true"></div>
                </section>

            </div>

        )
    }

}
export default Faq;