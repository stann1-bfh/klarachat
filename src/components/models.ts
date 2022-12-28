export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface KlaraChatMessage {
  id: number,
  conv_id: number,
  name: string,
  avatar: string,
  text: string[],
  stamp: string,
  sent: boolean,
  bgcolor: string
}