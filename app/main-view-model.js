import { Observable } from '@nativescript/core';

function getMessage(counter) {
  if (counter <= 0) {
    return 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  } else {
    return `${counter} taps left`;
  }
}

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.counter = 42;
  viewModel.message = getMessage(viewModel.counter);

  // Would like to extract this out into another method however I dont know if passing
  // the viewModel as a dependancy is a good idea, a real thinker if you ask me
  viewModel.set('newText', 'Replace Me!');
  viewModel.set('replaceable', viewModel.get('newText'));

  viewModel.onTap = () => {
    viewModel.counter--;
    viewModel.set('message', getMessage(viewModel.counter));

    // log the message to the console
    console.log(getMessage(viewModel.counter));
  };
  // Prolly a really bad name for it
  viewModel.onSecondButtonTap = () => {
    viewModel.set('replaceable', viewModel.get('newText'));
  };

  return viewModel;
}
