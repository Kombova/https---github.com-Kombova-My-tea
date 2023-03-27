import Image from "next/image";

const About = () =>{
    const myLoader = ({ src, width, quality }:any) => {
        return `https://static.wixstatic.com/media/1a0fcb_427782815a0f42389b0905009fde1c3c~mv2.jpg/v1/fill/${src}?w=${width}&q=${quality || 75}`
      }
      
    return(
        <div className=" w-full mt-[40px] mb-[20px]">
            <div className=' max-w-7xl mx-auto '>
                <h1 className=" mx-auto max-w-[600px] h-[60px] border-b-2 ml-auto mr-auto mt-[20px] text-[60px] text-center font-[Lobster]">Про нас</h1>
                
                <p className=" mt-[20px] text-center text-[25px] font-[Shantell Sans] pb-[20px]">Компанія Archive Tea була створена у 2022 році з наміром поділитися в’єтнамським чаєм зі світом.
                    Ми продаємо чаї, які походять із природних біорізноманітних районів, не містять хімікатів,
                    виготовляються з високоякісних матеріалів і обробляються таким чином, щоб отримати найкращий кінцевий
                    продукт. Ми завжди шукаємо нові сорти чаю та нові напрямки для вивчення
                </p>
                <p className=" mt-[20px] text-center text-[25px] font-[Shantell Sans]  pb-[20px]">
                    Ми пропонуємо вибір чаю, який, на нашу думку, демонструє найкраще з різних регіонів виробництва чаю 
                    В’єтнаму. Більшість наших чаїв виготовлено з дикорослих чайних дерев, яким сотні років 
                    (Trà cổ thụ/Gu shu cha).
                </p>
                <p className=" mt-[20px] text-center text-[25px] font-[Shantell Sans]  pb-[20px]">
                    Більшість чаїв мають прості назви, які вказують, з яких регіонів вони походять. Ми сподіваємось дати 
                    вам змогу краще ознайомитися з різноманітними терруарами, де виробляють чай, і розширити ваші знання 
                    про в’єтнамський чай.
                </p>
                <p className=" mt-[20px] pt-[18px] text-center text-[25px] font-[Pacifico] border-t-2 border-b-2 pb-[20px]">
                    Чай – це щось близьке нашому серцю, і ми продаємо лише ті чаї, які п’ємо.
                </p>
                <ul className="mt-[20px] flex justify-between flex-wrap gap-3 max-[1230px]:flex-col max-[1230px]:mx-auto max-[1230px]:items-center ">
                    <li>
                        <Image
                        loader={myLoader}
                        src="w_403,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/B6ED9B57-6C9C-47A9-8645-02523D42246D_edited.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        />
                    </li>
                    <li>
                        <Image
                        loader={myLoader}
                        src="w_403,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/B6ED9B57-6C9C-47A9-8645-02523D42246D_edited.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        />
                    </li>
                    <li>
                        <Image
                        loader={myLoader}
                        src="w_403,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/B6ED9B57-6C9C-47A9-8645-02523D42246D_edited.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        />
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
export default About;