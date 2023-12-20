import { RegistrationForm } from "@/components/RegisterForm";
import { SupportMail } from "@/components/SupportMail";
import { useTranslations } from "next-intl";
import styles from "../../../styles/RegistrationPage.module.scss";
import { WhatsWrong } from "@/components/WhatsWrong";
import Link from "next/link";


export default function RegistrationPage() {
  const t = useTranslations("RegisterPage");
   const textContent = {
     majorTitle: t("majorTitle"),
     confidential: t("confidential"),
     confidentialLink: t("confidentialLink"),
     form: {
       name: t("form.name"),
       namePlaceholder: t("form.namePlaceholder"),
       email: t("form.email"),
       emailPlaceholder: t("form.emailPlaceholder"),
       password: t("form.password"),
       passwordPlaceholder: t("form.passwordPlaceholder"),
       confirmPswr: t("form.confirmPswr"),
       confirmPswrPlaceholder: t("form.confirmPswrPlaceholder"),
       btn: t("form.btn"),
     },
     additionText: {
       register: t("additionText.register"),
       btn: t("additionText.btn"),
     },
     successful: {
       message: t("successful.message"),
       loginLink: t("successful.loginLink"),
     },
     verify: {
       message: t("verify.message"),
       btn: t("verify.btn"),
       errors: {
         notFound: t("verify.errors.notFound"),
         inUse: t("verify.errors.inUse"),
         invalidEmail: t("verify.errors.invalidEmail"),
       },
       form: {
         email: t("verify.form.email"),
         emailPlaceholder: t("verify.form.emailPlaceholder"),
         btn: t("verify.form.btn"),
       },
       sendText: t("verify.sendText"),
     },
     errors: {
       auth: t("errors.auth"),
       email: t("errors.email"),
       password: t("errors.password"),
       confirmPass: t("errors.confirmPass"),
     },
   };
  const supportContent = {
    problem: t("support.problem"),
    sendText: t("support.sendText"),
    supportForm: {
      openBtn: t("support.supportForm.openBtn"),
      email: t("support.supportForm.email"),
      emailPlaceholder: t("support.supportForm.emailPlaceholder"),
      emailErr: t("support.supportForm.emailErr"),
      message: t("support.supportForm.message"),
      messagePlaceholder: t("support.supportForm.messagePlaceholder"),
      sendBtn: t("support.supportForm.sendBtn"),
    },
  };
  const wrongContent = {
    whatsWrong: t("wrong.whatsWrong"),
    openList: t("wrong.openList"),
    list: {
      title: t("wrong.list.title"),
      fields: {
        first: t("wrong.list.fields.first"),
        firstBtn: t("wrong.list.fields.firstBtn"),
        second: t("wrong.list.fields.second"),
        third: t("wrong.list.fields.third"),
        fourth: t("wrong.list.fields.fourth"),
      },
    },
  };
  return (
    <section className="section">
      <div className="container">
        <h1 className="sectionTitle">{textContent.majorTitle}</h1>
        <div className={styles.register__main__container}>
          <p className={styles.confidential}>{textContent.confidential}</p>
          <Link href={"/info/terms"} className={styles.confidential__link}>
            {textContent.confidentialLink}
          </Link>
          <RegistrationForm textContent={textContent} />
          <div className={styles.help__container}>
            <WhatsWrong
              supportContent={supportContent}
              textContent={textContent}
              wrongContent={wrongContent}
            />
          </div>
        </div>
      </div>
    </section>
  );
}