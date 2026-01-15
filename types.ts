
export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Therapist {
  id: string;
  name: string;
  level: string;
  specialty: string;
  image: string;
}

// Added missing ChatMessage interface used in SupportChat component
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
