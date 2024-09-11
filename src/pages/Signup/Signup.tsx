import { createSignal, onMount } from "solid-js";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import Step5 from "./components/Step5/Step5";
import Step6 from "./components/Step6/Step6";
import Step7 from "./components/Step7/Step7";
import Step8 from "./components/Step8/Step8";
import Confirmation from "./Confirmation"; // 新しいコンポーネントをインポート
import { saveSignupResponse } from "../../firebase/firestore";
import { FormData } from "../../types/formTypes";
import {
  SignupWrapper,
  SignupInner,
  Form,
  ProgressBar,
  ProgressStep,
  ButtonGroup,
  Button,
} from "./Signup.styled";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Signup = () => {
  const [step, setStep] = createSignal(1);
  const [formData, setFormData] = createSignal<FormData>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    birthdate: "",
    date: "",
    purpose: "",
    otherPurpose: "",
    theme: "",
  });
  const [isStepValid, setIsStepValid] = createSignal(false);
  const [isConfirming, setIsConfirming] = createSignal(false); // 確認画面の状態を管理

  // ローカルストレージからフォームデータを読み込む
  onMount(() => {
    const savedFormData = localStorage.getItem("signupFormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  });

  // フォームデータが変更されたときにローカルストレージに保存する
  const handleFormDataChange = (newFormData: FormData) => {
    setFormData(newFormData);
    localStorage.setItem("signupFormData", JSON.stringify(newFormData));
  };

  const handleNext = () => {
    if (isStepValid()) {
      setStep(step() + 1);
      console.log(`現在のステップ: ${step() + 1}`); // 次のステップを表示
    }
  };

  const handlePrev = () => {
    setStep(step() - 1);
    console.log(`現在のステップ: ${step() - 1}`); // 前のステップを表示
  };

  const handleConfirm = () => {
    setIsConfirming(true);
  };

  const handleCancelConfirm = () => {
    setIsConfirming(false);
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const age = calculateAge(formData().birthdate);
    try {
      await saveSignupResponse({ ...formData(), age });
      alert("申し込みが送信されました！");
      localStorage.removeItem("signupFormData"); // 送信後にローカルストレージをクリア
    } catch (error) {
      alert("申し込みの送信中にエラーが発生しました。");
    }
  };

  const handleConfirmSubmit = () => {
    const form = document.querySelector("form");
    if (form) {
      handleSubmit(new Event("submit"));
    }
  };

  const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <SignupWrapper>
      <SectionTitle title="参加を申し込む" />
      <SignupInner>
        {isConfirming() ? (
          <Confirmation
            formData={formData()}
            onConfirm={handleConfirmSubmit}
            onCancel={handleCancelConfirm}
          />
        ) : (
          <>
            <ProgressBar>
              {[...Array(8)].map((_, index) => (
                <ProgressStep
                  active={step() === index + 1}
                  completed={step() > index + 1}
                >
                  {step() > index + 1 ? "" : index + 1}
                </ProgressStep>
              ))}
            </ProgressBar>
            <Form onSubmit={handleSubmit}>
              {step() === 1 && (
                <Step1
                  formData={formData()}
                  setFormData={handleFormDataChange}
                  setIsStepValid={setIsStepValid}
                />
              )}
              {step() === 2 && (
                <Step2
                  formData={formData()}
                  setFormData={handleFormDataChange}
                  setIsStepValid={setIsStepValid}
                />
              )}
              {step() === 3 && (
                <Step3
                  formData={formData()}
                  setFormData={handleFormDataChange}
                  setIsStepValid={setIsStepValid}
                />
              )}
              {step() === 4 && (
                <Step4
                  formData={formData()}
                  setFormData={handleFormDataChange}
                  setIsStepValid={setIsStepValid}
                />
              )}
              {step() === 5 && (
                <Step5
                  formData={formData()}
                  setFormData={handleFormDataChange}
                  setIsStepValid={setIsStepValid}
                />
              )}
              {step() === 6 && (
                <Step6
                  formData={formData()}
                  setFormData={handleFormDataChange}
                  setIsStepValid={setIsStepValid}
                />
              )}
              {step() === 7 && (
                <Step7
                  formData={formData()}
                  setFormData={handleFormDataChange}
                  setIsStepValid={setIsStepValid}
                />
              )}
              {step() === 8 && (
                <Step8
                  formData={formData()}
                  setFormData={handleFormDataChange}
                  setIsStepValid={setIsStepValid}
                />
              )}
              <ButtonGroup>
                {step() > 1 && (
                  <Button
                    type="button"
                    onClick={handlePrev}
                    variant="secondary"
                  >
                    戻る
                  </Button>
                )}
                {step() < 8 && (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                  >
                    次へ
                  </Button>
                )}
                {step() === 8 && (
                  <Button type="button" onClick={handleConfirm}>
                    送信内容を確認する
                  </Button>
                )}
              </ButtonGroup>
            </Form>
          </>
        )}
      </SignupInner>
    </SignupWrapper>
  );
};

export default Signup;
