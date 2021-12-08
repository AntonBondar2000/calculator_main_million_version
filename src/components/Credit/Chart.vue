<script>
  import { Pie, mixins } from 'vue-chartjs'
  const { reactiveProp } = mixins
  export default {
    extends: Pie,
    mixins: [reactiveProp],
    data () {
      	return {
			options: {
				responsive: true,
			}
		}
    },
	props:['chartData'],
    mounted () {
      this.renderChart(this.chartData, this.options)
    },
    watch: {
        chartData: function () {
            this.$data._chart.update();
        }
    }
  }
</script>