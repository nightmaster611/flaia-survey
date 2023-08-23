'use client';
import CustomForm from '@/components/FormRelated/CustomForm';
import { CustomFormInputProps } from '@/components/FormRelated/types';
import { Modal } from 'antd';
import React from 'react';

const SurveyTitle = () => {
  return (
    <div>
      <div className="mb-6 text-center font-bold text-3xl">
        AI Integration Survey
      </div>
      <p className="mb-2">
        We are conducting this survey to gain invaluable insights and
        deepen our understanding of how artificial intelligence is
        reshaping the landscape of alternative investments. By
        engaging professionals from diverse roles within the
        investment industry, we aim to explore the multifaceted
        applications of AI in making informed investment decisions,
        optimizing investment strategies, conducting advanced
        research, and streamlining operational processes.
      </p>
      <p>
        This survey will empower us with a comprehensive
        understanding of the current trends and dynamics surrounding
        artificial intelligence, enabling us to identify untapped
        opportunities, overcome challenges, and establish
        industry-leading practices. The data we collect will serve as
        a catalyst for groundbreaking research and development,
        driving the future of AI-driven solutions in the alternative
        investment space and providing stakeholders with invaluable
        guidance for their decision-making processes. Your
        participation in this survey plays a vital role in advancing
        our knowledge and fostering innovation within the realm of
        alternative investments.
      </p>
    </div>
  );
};

const SurveyPrivacyModal: React.FC<{ visible: boolean }> = ({
  visible
}) => {
  return (
    <Modal open={visible}>
      <h2>Privacy Statement</h2>
      <p>
        Your privacy is important to us. We handle your personal
        information responsibly and in accordance with our privacy
        policy.
      </p>
    </Modal>
  );
};
const inputs: CustomFormInputProps[] = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'jobTitle', label: 'Job Title' },
  { name: 'company', label: 'Company' },
  { name: 'email', label: 'Email', type: 'text' },
  { name: 'cellPhone', label: 'Cell Phone' },
  {
    name: 'role',
    label: 'Functional Role',

    type: 'select',
    options: [
      { label: 'Investments', value: 'Investments' },
      { label: 'Operations', value: 'Operations' },
      {
        label: 'Business Development',
        value: 'Business Development'
      },
      { label: 'Investor Relations', value: 'Investor Relations' }
    ]
  },
  {
    name: 'primaryNeedForAi',
    label:
      'What is your primary need for using artificial intelligence to operational excellence? (You can select more than one)',
    type: 'checkbox',
    options: [
      {
        label: 'Risk Assessment',
        value: 'Risk Assessment',
        colProps: { span: 12 }
      },
      {
        label: 'Efficiency Improvement',
        value: 'Efficiency Improvement',
        colProps: { span: 12 }
      },
      {
        label: 'Accuracy Enhancement',
        value: 'Accuracy Enhancement',
        colProps: { span: 12 }
      },
      {
        label: 'Compliance Requirements',
        value: 'Compliance Requirements',
        colProps: { span: 12 }
      },
      {
        label: 'Comprehensive Analysis',
        value: 'Comprehensive Analysis',
        colProps: { span: 12 }
      },
      {
        label: 'Real-Time Monitoring',
        value: 'Real-Time Monitoring',
        colProps: { span: 12 }
      },
      {
        label: 'Predictive Capabilities',
        value: 'Predictive Capabilities',
        colProps: { span: 12 }
      },
      {
        label: 'Scalability',
        value: 'Scalability',
        colProps: { span: 12 }
      },
      {
        label: 'Cost Reduction',
        value: 'Cost Reduction',
        colProps: { span: 12 }
      },
      {
        label: 'Competitive Advantage',
        value: 'Competitive Advantage',
        colProps: { span: 12 }
      }
    ]
  },
  {
    name: 'aiBelief',
    type: 'radio',
    label:
      'To what extent do you believe that AI can significantly improve operational efficiency and decision-making in asset management? (Select one)',
    options: [
      {
        label: 'Strongly Disagree',
        value: 'Strongly Disagree',
        colProps: { span: 12 }
      },
      {
        label: 'Disagree',
        value: 'Disagree',
        colProps: { span: 12 }
      },
      { label: 'Neutral', value: 'Neutral', colProps: { span: 12 } },
      { label: 'Agree', value: 'Agree', colProps: { span: 12 } },
      {
        label: 'Strongly Agree',
        value: 'Strongly Agree',
        colProps: { span: 12 }
      }
    ]
  },
  {
    name: 'aiUse',
    type: 'radio',
    label:
      'Does your asset management company currently use AI or machine learning algorithms to optimize day-to-day operations?',
    options: [
      { label: 'Yes', value: 'Yes', colProps: { span: 12 } },
      { label: 'No', value: 'No', colProps: { span: 12 } }
    ]
  },
  {
    name: 'challengeOption',
    type: 'checkbox',
    label:
      'What operational challenges do you think AI could help address in your asset management processes? (Select all that apply)',
    options: [
      {
        value: 'Reduce Manual Error',
        label: 'Reduce Manual Error',
        colProps: { span: 12 }
      },
      {
        value: 'Increase Efficiency',
        label: 'Increase Efficiency',
        colProps: { span: 12 }
      },
      {
        value: 'Improve Decision Making',
        label: 'Improve Decision Making',
        colProps: { span: 12 }
      },
      {
        value: 'Automate Processes',
        label: 'Automate Processes',
        colProps: { span: 12 }
      },
      {
        value: 'Data Management',
        label: 'Data Management',
        colProps: { span: 12 }
      },
      { value: 'Other', label: 'Other', colProps: { span: 12 } }
    ]
  },
  {
    name: 'challengeOptionOtherSpecify',
    label: 'If other, please specify',
    dependencies: ['challengeOption'],
  },
  {
    name: 'rpaExploration',
    label:
      'Has your asset management company explored Robotic Process Automation (RPA) or similar technologies to streamline repetitive tasks? (Select one)',
    type: 'radio',
    options: [
      { label: 'Yes', value: 'Yes', colProps: { span: 8 } },
      { label: 'No', value: 'No', colProps: { span: 8 } },
      { label: 'Unsure', value: 'Unsure', colProps: { span: 8 } }
    ]
  },
  {
    name: 'rpaBenefits',
    label: 'If yes, what benefits were observed?',
    dependencies: ['rpaExploration'],
  },
  {
    name: 'aiIntegration',
    label:
      'How do you envision AI being integrated into your operational workflows?'
  },
  {
    name: 'aiInvestmentLikelihood',

    type: 'radio',
    label:
      'How likely is your asset management company to invest in AI technology for operational improvements?',
    options: [
      {
        label: 'Not Likely',
        value: 'Not Likely',
        colProps: { span: 12 }
      },
      {
        label: 'Somewhat Likely',
        value: 'Somewhat Likely',
        colProps: { span: 12 }
      },
      { label: 'Neutral', value: 'Neutral', colProps: { span: 12 } },
      { label: 'Likely', value: 'Likely', colProps: { span: 12 } },
      {
        label: 'Highly Likely',
        value: 'Highly Likely',
        colProps: { span: 12 }
      }
    ]
  },
  {
    name: 'aiEnhancement',
    label:
      'Which specific operational tasks or processes do you believe could be most enhanced through AI implementation?'
  },
  {
    name: 'aiTaskPercentage',
    label:
      'What percentage of your operational tasks do you estimate could be automated with AI?',
    type: 'number',
    inputNumberProps: { max: 100, min: 0 }
  },
  {
    name: 'aiCostBelief',
    label:
      'To what extent do you agree with the statement: "AI integration will significantly boost operational performance and reduce costs"? (Select one)',
    type: 'radio',
    options: [
      {
        value: 'Strongly Disagree',
        label: 'Strongly Disagree',
        colProps: { span: 12 }
      },
      {
        value: 'Disagree',
        label: 'Disagree',
        colProps: { span: 12 }
      },
      { value: 'Neutral', label: 'Neutral', colProps: { span: 12 } },
      { value: 'Agree', label: 'Agree', colProps: { span: 12 } },
      {
        value: 'Strongly Agree',
        label: 'Strongly Agree',
        colProps: { span: 12 }
      }
    ]
  },
  {
    name: 'aiPilot',
    label:
      'Would your asset management company be interested in piloting an AI-driven solution to improve operational efficiency? (Yes/No)',
    type: 'radio',
    options: [
      { value: 'Yes', label: 'Yes', colProps: { span: 12 } },
      { value: 'No', label: 'No', colProps: { span: 12 } }
    ]
  },
  {
    name: 'openForDiscussion',
    label: 'Are you open for discussion?',
    type: 'radio',
    options: [
      { value: 'Yes', label: 'Yes', colProps: { span: 12 } },
      { value: 'No', label: 'No', colProps: { span: 12 } }
    ]
  }
];
const initialSurveyValues = inputs.reduce(
  (acc, input) => ({ ...acc, [input.name]: undefined }),
  {} as Record<string, any>
);

const Survey = () => {
  const onSubmit = async (v: any) => {
    console.log('value', v);
  };

  return (
    <div className="h-full w-full overflow-auto flex justify-center">
      <div className="md:max-w-[900px] p-12 max-w-full h-[max-content]">
        <div className="mb-10">
          <SurveyTitle />
        </div>
        <div className="p-6 rounded-md border border-black">
          <CustomForm
            initialValues={initialSurveyValues}
            inputs={inputs}
            name="survey"
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Survey);
