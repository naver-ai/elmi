import { Section } from "../components/Section"

export const Acknowledgments = () => {
    return <Section title="Acknowledgments">
        <ul className="list-disc list-outside ml-4">
            <li>This work was supported as a research internship at NAVER AI Lab of NAVER Cloud.</li>
            <li>We used an official MV of <a className="underline" href="http://symbol.ksaac.or.kr/searchsymbols/index.jsp">"Dynamite" by BTS</a> for the demo.</li>
            <li>We used OpenAI&apos;s GPT APIs to run the chatbot.</li>
        </ul>
    </Section>
}