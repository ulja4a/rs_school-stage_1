export function displayMainElements() {
  const body = document.querySelector('body') as HTMLElement;

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  body.append(wrapper);

  const main = document.createElement('div');
  main.classList.add('main');
  wrapper.append(main);

  const card = document.createElement('div');
  card.classList.add('card');
  main.append(card);

  const title = document.createElement('h1');
  title.classList.add('title');
  card.append(title);

  const fields = document.createElement('div');
  fields.classList.add('fields');
  card.append(fields);

  const form = document.createElement('form');
  form.classList.add('form');
  fields.append(form);

  const actions = document.createElement('div');
  actions.classList.add('actions');
  card.append(actions);

  const link = document.createElement('a');
  link.classList.add('link');
  actions.append(link);
}
