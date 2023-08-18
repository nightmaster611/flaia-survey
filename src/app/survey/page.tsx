import { Modal } from "antd";
import Image from "next/image";

const SurveyTitle = () => {
  return (
    <div>
      We are conducting this survey to gain invaluable insights and deepen our
      understanding of how artificial intelligence is reshaping the landscape of
      alternative investments. By engaging professionals from diverse roles
      within the investment industry, we aim to explore the multifaceted
      applications of AI in making informed investment decisions, optimizing
      investment strategies, conducting advanced research, and streamlining
      operational processes. This survey will empower us with a comprehensive
      understanding of the current trends and dynamics surrounding artificial
      intelligence, enabling us to identify untapped opportunities, overcome
      challenges, and establish industry-leading practices. The data we collect
      will serve as a catalyst for groundbreaking research and development,
      driving the future of AI-driven solutions in the alternative investment
      space and providing stakeholders with invaluable guidance for their
      decision-making processes. Your participation in this survey plays a vital
      role in advancing our knowledge and fostering innovation within the realm
      of alternative investments.
    </div>
  );
};

const SurveyPrivacyModal: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <Modal open={visible}>
      <h2>Privacy Statement</h2>
      <p>
        Your privacy is important to us. We handle your personal information
        responsibly and in accordance with our privacy policy.
      </p>
    </Modal>
  );
};

export default function Survey() {
  return <></>;
}
