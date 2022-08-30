import React from "react";
import './Chart.css';

let intervalID: ReturnType<typeof setInterval>;

interface IProps {
}

interface IState {
  chartData: Array<{name: string, time: number}>
}

export default class Chart extends React.Component<IProps, IState> {
  inputRef: React.RefObject<HTMLDivElement>

  constructor(props: IProps) {
    super(props);

    this.inputRef = React.createRef();
  }

  state = {
    chartData: [
      {name: "Landing Page", time: 7.4},
      {name: "Configurator", time: 0.2},
      {name: "Check-out", time: 7.0},
      {name: "Deal", time: 3.8},
    ]
  }

  calculatePadding = (index: number): number => {
    let totalTime = 0;
    let padding = 0

    for (let i = 0; i < this.state.chartData.length; i++) {
      totalTime += this.state.chartData[i].time;
    }

    for(let i = 0; i < index; i++) {
      padding += this.state.chartData[i].time;
    }

    const result = Math.floor(padding / totalTime * 100);

    return result;
  }

  calculateWidth(index: number): number {
    let totalTime = 0;

    for (let i = 0; i < this.state.chartData.length; i++) {
      totalTime += this.state.chartData[i].time;
    }

    const result = Math.floor(this.state.chartData[index].time / totalTime * 100);

    console.log(result);

    return result;
  }

  updateChart(): void {
    this.setState({
      chartData: [
        {name: "Landing Page", time: Math.floor((Math.random() * 10) * 10) / 10},
        {name: "Configurator", time: Math.floor((Math.random() * 10) * 10) / 10},
        {name: "Check-out", time: Math.floor((Math.random() * 10) * 10) / 10},
        {name: "Deal", time: Math.floor((Math.random() * 10) * 10) / 10},
      ]
    })
  }

  componentDidMount() {
    intervalID = setInterval(() => this.inputRef.current?.click(), 32000);
  }

  componentWillUnmount() {
    clearInterval(intervalID);
  }

  render(): React.ReactNode {
    return (
      <div className="chart">
        <div className="chart__title">Spent time (Seconds)</div>
        <div className="chart__list">
          {
            this.state.chartData.map((item, index) => {
              return (
                <div className="chart-item">
                  <div className="name">{item.name}</div>
                  <div className="bar-container">
                    <div className="padding-block" style={{width: `${this.calculatePadding(index)}%`}}></div>
                    <div className="bar" style={{width: `${this.calculateWidth(index)}%`}}>{item.time}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div
          className="update-button"
          onClick={() => this.updateChart()}
          ref={this.inputRef}
        >Update</div>
      </div>
    )
  }
}