import { ClassAttributes, Component, ReactNode } from 'react';

type Unsubscribe = () => void;
type Subscribe<T> = (onChange: (value: T) => void) => Unsubscribe;

type Props<T> = ClassAttributes<HTMLElement> & {
  subscribe: Subscribe<T>;
  className?: string;
  children: (value: T | null, isLoading: boolean) => ReactNode;
};

type State<T> = {
  value: T | null;
  isLoading: boolean;
};

class Bind<T> extends Component<Props<T>, State<T>> {
  private unsubscribe?: Unsubscribe = undefined;

  public state = {
    value: null,
    isLoading: false,
  };

  public componentDidMount() {
    this.unsubscribe = this.props.subscribe(value => this.setState({ value, isLoading: true }));
  }

  public componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  public render() {
    return this.props.children(this.state.value, this.state.isLoading);
  }
}

export default Bind;
