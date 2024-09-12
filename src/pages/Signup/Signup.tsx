import { createSignal, onMount } from "solid-js";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import Step5 from "./components/Step5/Step5";
import Step6 from "./components/Step6/Step6";
import Step7 from "./components/Step7/Step7";
import Step8 from "./components/Step8/Step8";
import Confirmation from "./components/Confirmation/Confirmation";
import Button from "../../components/Button/Button";
import { saveSignupResponse } from "../../firebase/firestore";
import { FormData } from "../../types/formTypes";
import {
  SignupWrapper,
  SignupInner,
  Form,
  ProgressBar,
  ProgressStep,
  ButtonGroup,
  BackLink,
} from "./Signup.styled";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useNavigate } from "@solidjs/router";

const Signup = () => {
  const navigate = useNavigate();
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

  const isStepOptional = (stepNumber: number) => {
    return [3, 4, 5, 8].includes(stepNumber); // ステップ3, 4, 5を任意とする
  };

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
    if (isStepValid() || isStepOptional(step())) {
      if (step() < 8) {
        setStep(step() + 1);
        setIsStepValid(false);
      } else {
        setIsConfirming(true); // ステップ8の後に確認画面を表示
      }
    }
  };

  const handlePrev = (e: Event) => {
    e.preventDefault();
    setStep(step() - 1);
    console.log(`現在のステップ: ${step() - 1}`); // 前のステップを表示
  };

  const handleConfirm = async () => {
    try {
      await saveSignupResponse(formData());
      localStorage.removeItem("signupFormData");
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("申し込みの送信中にエラーが発生しました。");
    }
  };

  const handleCancelConfirm = () => {
    setIsConfirming(false);
  };

  const handleStepClick = (clickedStep: number) => {
    if (clickedStep <= step()) {
      setStep(clickedStep);
    }
  };

  return (
    <SignupWrapper>
      <SectionTitle title="参加を申し込む" />
      <SignupInner>
        {isConfirming() ? (
          <Confirmation
            formData={formData()}
            onConfirm={handleConfirm}
            onCancel={handleCancelConfirm}
          />
        ) : (
          <>
            <ProgressBar>
              {[...Array(8)].map((_, index) => (
                <ProgressStep
                  active={step() === index + 1}
                  completed={step() > index + 1}
                  onClick={() => handleStepClick(index + 1)}
                >
                  {step() > index + 1 ? "" : index + 1}
                </ProgressStep>
              ))}
            </ProgressBar>
            <Form onSubmit={(e) => e.preventDefault()}>
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
                  <BackLink href="#" onClick={handlePrev}>
                    戻る
                  </BackLink>
                )}
                {step() < 8 && (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid() && !isStepOptional(step())}
                  >
                    次へ
                  </Button>
                )}
                {step() === 8 && (
                  <Button type="button" onClick={handleNext}>
                    確認画面へ
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
