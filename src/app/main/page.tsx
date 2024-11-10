import Styles from "./page.module.css";
import Image from "next/image";
import MyComponent from "../type/page";

export default function Main(){

    return(
        
        <main className={`${Styles.main}`}>
            <section className={`${Styles.firstSection}`} >
                <div className={`${Styles.leftSection}`}>
                    Hi, My name is a <span className="text-lime-500">Hussain</span> 
                    <div>and I'm a passionate</div>
                    <div>Web Developer</div>
                    <MyComponent />
                </div>

                <div className={`${Styles.rightSection}`}>
                    <Image src={'/image/Png1.png'} alt="png1" className={`${Styles.png1}`} width={300} height={300}/>
                </div>
            </section>
            <hr className={`${Styles.hr}`}/>

            <section className={`${Styles.secondSection}`}>
                <span className="text-gray-600">What I have done so far</span>
                <h1>Work Experience</h1>

                <div className={`${Styles.box}`}>
                        <Image src={'/image/developer.png'} alt="developer" className={`${Styles.developer}`} width={23} height={23}/>
                    <div className={`${Styles.vertical}`}>
                        <div className={`${Styles.verticalText}`}>
                            HTML Developer (2022-2023)
                        </div>
                        <div className={`${Styles.verticalDisc}`}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Optio quasi explicabo quis, harum temporibus molestias nesciunt 
                            natus ad nobis tempora laborum, eligendi perspiciatis \
                            repellendus veritatis nostrum minus hic mollitia ea!
                        </div>
                    </div>

                        <Image src={'/image/javascript.png'} alt="developer" className={`${Styles.javascript}`} width={300} height={300}/>
                    <div className={`${Styles.vertical}`}>
                        <div className={`${Styles.verticalText}`}>
                            Javascript Developer (2023)
                        </div>
                        <div className={`${Styles.verticalDisc}`}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Optio quasi explicabo quis, harum temporibus molestias nesciunt 
                            natus ad nobis tempora laborum, eligendi perspiciatis \
                            repellendus veritatis nostrum minus hic mollitia ea!
                        </div>
                    </div>

                        <Image src={'/image/typescript.png'} alt="developer" className={`${Styles.typescript}`} width={300} height={300}/>
                    <div className={`${Styles.vertical}`}>
                        <div className={`${Styles.verticalText}`}>
                            Typescript Developer (2024)
                        </div>
                        <div className={`${Styles.verticalDisc}`}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Optio quasi explicabo quis, harum temporibus molestias nesciunt 
                            natus ad nobis tempora laborum, eligendi perspiciatis \
                            repellendus veritatis nostrum minus hic mollitia ea!
                        </div>
                    </div>

                        <Image src={'/image/nextjs.png' } alt="developer1" width={23} height={25} className={`${Styles.nextjs}`}/>
                    <div className={`${Styles.vertical}`}>
                        <div className={`${Styles.verticalText}`}>
                            NextJs Developer (2024)
                        </div>
                        <div className={`${Styles.verticalDisc}`}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Optio quasi explicabo quis, harum temporibus molestias nesciunt 
                            natus ad nobis tempora laborum, eligendi perspiciatis \
                            repellendus veritatis nostrum minus hic mollitia ea!
                        </div>
                    </div>

                    
                </div>
            </section>
        </main>
    );
}