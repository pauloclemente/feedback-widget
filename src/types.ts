import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';


type Feedback = 'BUG' | 'IDEA' | 'OTHER'

export type ImageProps = {
  url: string;
  alt: string;
}

export interface IFeedback {
  title: string,
  image: ImageProps,
}

export type FeedbackType = keyof Record<Feedback, IFeedback>

//Steps
export interface IFeedbackContentStepProps {
  feedBackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export interface IFeedbackSucessStepProps {
  onFeedbackRestartRequested: () => void
}
//Buttons

export interface IScreenshotButton {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}
