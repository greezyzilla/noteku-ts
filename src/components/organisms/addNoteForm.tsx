import { ChangeEvent, Component } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../molecules/modal';

import { NoteInterface } from '../../interfaces';
import { Button } from '../molecules';

interface AddNoteFormState{
  data : NoteInterface;
  isActive : boolean;
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

export default class AddNoteForm extends Component<any, AddNoteFormState> {
  constructor(props : any) {
    super(props);
    this.state = {
      ...initialState,
      data: {
        ...initialState.data,
        id: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      },
    };
  }

  onCloseHandle() {
    this.setState({
      ...initialState,
      data: {
        ...initialState.data,
        id: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      },
    });
  }

  onOpenHandle() {
    this.setState({ isActive: true });
  }

  onChangeHandle(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
    const { isActive } = this.state;

    const modalComponent = isActive
      ? createPortal(
        <Modal onClose={() => this.onCloseHandle()}>
          <div className="flex flex-col gap-4 w-[300px]">
            <form className="flex flex-col gap-4">
              <label
                htmlFor="title"
                className="flex flex-col gap-2 text-sm"
              >
                <p className="text-slate-900">Title</p>
                <input
                  className="border text-sm p-3 border-indigo-300 rounded-md focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 focus:outline-none"
                  type="text"
                  name="title"
                  placeholder="Give me title..."
                  onChange={(e : ChangeEvent<HTMLInputElement>) => this.onChangeHandle(e)}
                />
              </label>
              <label
                htmlFor="body"
                className="flex flex-col gap-2 text-sm"
              >
                <p className="text-slate-900">Body</p>
                <textarea
                  className="border text-sm p-3 border-indigo-300 rounded-md focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 focus:outline-none"
                  name="body"
                  cols={30}
                  placeholder="Type your note..."
                  rows={10}
                  onChange={(e : ChangeEvent<HTMLTextAreaElement>) => this.onChangeHandle(e)}
                />
              </label>
            </form>
            <div className="flex gap-2">
              <Button onClick={() => this.onCloseHandle()} className="rounded-md py-2 flex-1 flex justify-center items-center bg-white text-indigo-500 border border-indigo-300 hover:border-indigo-400">
                Close
              </Button>
              <Button onClick={() => this.onSubmitHandle()} className="rounded-md py-2 flex-1 flex justify-center items-center bg-indigo-400 hover:bg-indigo-500 text-white">
                Submit
              </Button>
            </div>
          </div>
        </Modal>,
        document.body,
      ) : null;

    return (
      <>
        {modalComponent}
        <Button onClick={() => this.onOpenHandle()} className="px-6 py-3 bg-indigo-500 text-white rounded-full">
          Button
        </Button>
      </>
    );
  }
}
