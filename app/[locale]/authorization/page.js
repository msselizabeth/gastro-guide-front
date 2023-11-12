import { AuthForm } from "@/components/AuthForm";
import { SupportMail } from "@/components/SupportMail";
import { WhatsWrong } from "@/components/WhatsWrong";
import { useTranslations } from "next-intl";

export default function AuthPage() {

  const t = useTranslations("AuthPage");
  const textContent = {
    majorTitle: t("majorTitle"),
    form: {
      email: t("form.email"),
      emailPlaceholder: t("form.emailPlaceholder"),
      password: t("form.password"),
      passwordPlaceholder: t("form.passwordPlaceholder"),
      btn: t("form.btn"),
    },
    additionText: {
      register: t("additionText.register"),
      btn: t("additionText.btn"),
    },
    loggedInText: t("loggedInText"),
    profileLink: t("profileLink"),
    errors: {
      auth: t("errors.auth"),
      verify: t("errors.verify"),
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
          <AuthForm textContent={textContent} />
          <WhatsWrong
            textContent={textContent}
            supportContent={supportContent}
            wrongContent={wrongContent}
          />
          {/* <SupportMail supportContent={supportContent} /> */}
        </div>
      </section>
    );
}