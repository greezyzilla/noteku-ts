import { ChangeEvent, Component, FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { PlusIcon } from '@heroicons/react/solid';
import Modal from '../../molecules/modal';

import { NoteInterface } from '../../../interfaces';
import { Button } from '../../molecules';
import { InputText, InputTextarea } from '../../atoms';

interface AddNoteFormState{
  data : NoteInterface;
  isActive : boolean;
}

interface AddNoteFormProps{
  onAdd(_note: NoteInterface) : void;
  children(_params : { onClick: () => void }) : void;
}

const initialState = {
  data: {
    title: '',
    archived: false,
    starred: false,
    body: '',
  },
  isActive: false,
};

export default class AddNoteForm extends Component<AddNoteFormProps, AddNoteFormState> {
  constructor(props : AddNoteFormProps) {
    super(props);
    this.state = {
      ...initialState,
      data: {
        ...initialState.data,
        id: +new Date(),
        createdAt: new Date().toISOString(),
      },
    };
  }

  onCloseHandle() {
    this.setState({
      ...initialState,
      data: {
        ...initialState.data,
        id: +new Date(),
        createdAt: new Date().toISOString(),
      },
    });
  }

  onOpenHandle() {
    this.setState({ isActive: true });
  }

  onChangeHandle(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.target.name === 'title' && event.target.value.length > 50) return;
    this.setState((prevState : AddNoteFormState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        [event.target.name]: event.target.value,
      },
    }));
  }

  onSubmitHandle() {
    const { onAdd } = this.props;
    const { data } = this.state;

    onAdd(data);
    this.onCloseHandle();
  }

  render() {
    const { isActive, data: { title, body } } = this.state;
    const { children } = this.props;

    const modalComponent = isActive
      ? createPortal(
        <Modal onClose={() => this.onCloseHandle()}>
          <div className="w-[500px] divide-y overflow-hidden rounded-md shadow-2xl">
            <div className="flex items-center gap-4 bg-gradient-to-l from-blue-400 to-blue-600 px-5 pt-5 pb-4">
              <div className="rounded-md bg-blue-100 p-2">
                <PlusIcon className="h-3 w-3 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-white">ADD NEW NOTE</h2>
            </div>
            <div className="flex flex-col gap-4 divide-y-2 px-8 pt-4 pb-5">
              <form className="flex flex-col gap-4" onSubmit={(e : FormEvent) => e.preventDefault()}>
                <InputText
                  name="title"
                  title="Title"
                  placeholder="What do you call this note?"
                  onChange={(e : ChangeEvent<HTMLInputElement>) => this.onChangeHandle(e)}
                  value={title}
                  limit={50}
                  isPrimary
                />
                <InputTextarea
                  name="body"
                  title="Body"
                  placeholder="Something you want to write about this note?"
                  onChange={(e : ChangeEvent<HTMLTextAreaElement>) => this.onChangeHandle(e)}
                  value={body}
                  isPrimary
                />
              </form>
            </div>
            <div className="flex h-14">
              <Button onClick={() => this.onCloseHandle()} isPrimary>Close</Button>
              <Button onClick={() => this.onSubmitHandle()} isPrimary isFilled>Submit</Button>
            </div>
          </div>
        </Modal>,
        document.body,
      ) : null;
    return (
      <>
        {modalComponent}
        {children({ onClick: () => this.onOpenHandle() })}
      </>
    );
  }
}
