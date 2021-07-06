import React from 'react';

class Dog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doguinho: '',
      loading: true,
    };

    this.fetchDog = this.fetchDog.bind(this);
    this.reload = this.reload.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  reload() {
    this.setState({ loading: true });
    this.fetchDog();
  }

  async fetchDog() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestJSON = await request.json();
    this.setState({
      doguinho: requestJSON.message,
      loading: false,
    });
  }

  render() {
    const { doguinho, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <img src={ doguinho } alt="doguinho" />
        <button onClick={ this.reload } type="button">Mais doguinho</button>
      </div>
    );
  }
}

export default Dog;
