<template>
  <div>
    <div id="modal-result" tabindex="-1" class="modal fade" aria-hidden="true" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" class="close">
              <span>×</span>
            </button>
            <h4 class="modal-title text-center">正解率</h4>
          </div>
          <div class="modal-body text-center">
            <pie-chart :chartData="chartData" ref="chart"></pie-chart>
            <div>正解率 {{ correctPercentageObject['correctScore'] * 10 }} %</div>
            <div class="text-center" v-if="correctPercentageObject['correctScore'] * 10 == 100">
              おめでとうございます！！満点です。<br>
              この調子で勉強を続けていきましょう！！
            </div>
            <div class="text-center" v-else-if="correctPercentageObject['correctScore'] * 10 >= 80">
              いい調子ですね。このまま満点目指して頑張りましょう！！
            </div>
            <div class="text-center" v-else-if="correctPercentageObject['correctScore'] * 10 >=  50">
              まずまずですね。苦手箇所を復習しておきましょう。
            </div>
            <div class="text-center" v-else >
              勉強不足です。もっと頑張りましょう。
            </div>
            <input type="hidden" name="correctRatio" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="quizFinish">終了する</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "./PieChart";

export default {
  components: {
    PieChart
  },
  props: {
    correctPercentageObject: {
      type: Object
    }
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["正解", "不正解"],
        datasets: []
      },
    };
  },
  methods: {
    render() {
      //正解と不正解の数を集計する
      this.$set(this.chartData, "datasets", [
        {
          backgroundColor: ["#00D8FF", "#E46651"],
          data: [
            this.correctPercentageObject["correctScore"],
            this.correctPercentageObject["mistakeScore"],
          ]
        }
      ]);
      this.$refs.chart.renderPieChart();
    },
    quizFinish() {
      location.href = "/";
    },
  }
};
</script>