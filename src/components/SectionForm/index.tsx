import ContactForm from "../Form";
import style from "./style.module.css";

const SectionForm = () => {
  return (
    <section className={style.wrapper} id="payment">
      <div className={style.container}>
        <ContactForm
          title="Есть вопросы?"
          text="Заполните форму и наш менеджер свяжется с вами"
          phoneInputProps={{ type: "tel", placeholder: "Номер телефона" }}
          input={{
            border: "",
            backgroundColor: "",
          }}
          onButtonClick={() => {
            console.log("Кнопка нажата!");
          }}
        />

        <div className={style.instagram}>
          <div className={style.logo}>
            <img src="src/images/instagram_logo.png" alt="" />
          </div>
          <div className={style.foto}>
            <img
              src="src/images/Rectangle_1.png"
              alt="picture from Instagram"
            />
            <img
              src="src/images/Rectangle_3.png"
              alt="picture from Instagram"
            />
            <img
              src="src/images/Rectangle_4.png"
              alt="picture from Instagram"
            />
            <img
              src="src/images/Rectangle_2.png"
              alt="picture from Instagram"
            />
            <img
              src="src/images/Rectangle_5.png"
              alt="picture from Instagram"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
