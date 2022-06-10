export interface ModalComponent extends React.FunctionComponent {
  [key: string]: any
}

export type Modal = {
  Component: ModalComponent
  props: Record<any, any>
}
