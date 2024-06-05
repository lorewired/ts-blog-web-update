export interface PropsChildren {
   children: React.ReactNode
}

export interface Message {
   id: string;
   author: string;
   text: string;
   date: string;
}

export interface ChatContextType {
   getData: () => void;
   setMessages(messages: Message[] | undefined): void;
   messages: Message[] | undefined;
   chatMargin: string;
   setChatMargin: (value: string) => void;
}