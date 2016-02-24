import React, { Component } from 'react';

export default class AppStateListAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      list: [{
        author: 'Herman Melville',
        text: `Meanwhile, as we thus lay entranced, the occasional sudden frantic spectacles in the distance evinced the activity of the other boats, still engaged in drugging the whales on the frontier of the host; or possibly carrying on the war within the first circle, where abundance of room and some convenient retreats were afforded them. But the sight of the enraged drugged whales now and then blindly darting to and fro across the circles, was nothing to what at last met our eyes. It is sometimes the custom when fast to a whale more than commonly powerful and alert, to seek to hamstring him, as it were, by sundering or maiming his gigantic tail-tendon. It is done by darting a short-handled cutting-spade, to which is attached a rope for hauling it back again. A whale wounded (as we afterwards learned) in this part, but not effectually, as it seemed, had broken away from the boat, carrying along with him half of the harpoon line; and in the extraordinary agony of the wound, he was now dashing among the revolving circles like the lone mounted desperado Arnold, at the battle of Saratoga, carrying dismay wherever he went.`,
        title: 'Moby Dick'
      }, {
        author: 'Lewis Carroll',
        text: `This speech caused a remarkable sensation among the party. Some of the  birds hurried off at once: one old Magpie began wrapping itself up very  carefully, remarking, 'I really must be getting home; the night-air  doesn't suit my throat!' and a Canary called out in a trembling voice to  its children, 'Come away, my dears! It's high time you were all in bed!'  On various pretexts they all moved off, and Alice was soon left alone. 'I wish I hadn't mentioned Dinah!' she said to herself in a melancholy  tone. 'Nobody seems to like her, down here, and I'm sure she's the best  cat in the world! Oh, my dear Dinah! I wonder if I shall ever see you  any more!' And here poor Alice began to cry again, for she felt very  lonely and low-spirited.`,
        title: 'Alice in Wonderland'
      }, {
        author: 'Edgar Rice Burroughs',
        text: `Sola agreed with me, and it was decided that we should leave Thark this same night; just as quickly, in fact, as I could find and saddle my thoats.  Sola was to ride one and Dejah Thoris and I the other; each of us carrying sufficient food and drink to last us for two days, since the animals could not be urged too rapidly for so long a distance.`,
        title: 'A princess in Mars'
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>books</h1>
        <nav>
          {this.state.list.map(({title}, i) => <button key={i} onClick={() => this.setState({active: i})}>{title}</button>)}
        </nav>
        <p>{this.state.list[this.state.active].text}</p>
        <p>by {this.state.list[this.state.active].author}</p>

        <h2>new book</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          {this.state.error && <div style={{color: 'red'}}>we need all the details!</div>}
          <label>Author <input ref='author' /></label>
          <label>Title <input ref='title' /></label>
          <label>Text <textarea ref='text' /></label>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }

  onSubmit(event) {
    event.preventDefault();

    const author = this.refs.author.value;
    const text = this.refs.text.value;
    const title = this.refs.title.value;

    if (author && title && text) {
      this.setState({
        error: false,
        list: [...this.state.list, {author, title, text}]
      });

      this.refs.author.value = '';
      this.refs.text.value = '';
      this.refs.title.value = '';
    } else {
      this.setState({
        error: true
      });
    }
  }
}
