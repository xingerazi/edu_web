  <template>
    <div class="otherInfo">
        <el-card>
            <h3>平台用户</h3>
            <div class="chart" ref="chartContainer"></div>
        </el-card>
        <el-card>
            <h3>平台构成</h3>
            <div class="chart" ref="chartContainer2"></div>
        </el-card>
        <el-card>
            <h3>用户隐私保护</h3>
            <div class="chart" ref="chartContainer3"></div>
        </el-card>
        <el-card>
            <h3>网站评估</h3>
            <div class="chart" ref="chartContainer4"></div>
        </el-card>
        <el-card>
            <h3>客户流向</h3>
            <div class="chart" ref="chartContainer5"></div>
        </el-card>
        <el-card>
            <h3>板块对比</h3>
            <div class="chart" ref="chartContainer6"></div>
        </el-card>
    </div>
</template>



<script>
import * as echarts from "echarts";

export default {
    data() {
        return {
            chartData: {
                xAxis: {
                    type: "category",
                    data: ["2013.1", "2013.2", "2013.3", "2013.4", "2013.5", "2013.6"],
                },
                yAxis: [
                    {
                        type: "value",
                        name: "用户增量",
                    },
                    {
                        type: "value",
                        name: "用户增速",
                    },
                ],
                series: [
                    {
                        name: "用户增量",
                        type: "bar",
                        data: [1200, 2200, 2900, 3800, 5200, 6700],
                    },
                    {
                        name: "用户增速",
                        type: "line",
                        yAxisIndex: 1,
                        data: [13, 17, 22, 32, 23, 11],
                    },
                ],
            },
            //第二个图表
            chartData2: {
                title: {
                    text: "平台构成",
                    x: "center",
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: ["web端", "移动端", "管理员端"],
                },
                series: [
                    {
                        name: "存储方式",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: "center",
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold",
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { value: 335, name: "web端" },
                            { value: 310, name: "移动端" },
                            { value: 234, name: "管理员端" },
                        ],
                    },
                ],
            },
            //第三个图标
            chartData3: {
                title: {
                    text: "资产防护",
                    x: "center",
                    y: 10,
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}%",
                },
                legend: {
                    data: ["底层维护", "水印保护", "加强防护"],
                    bottom: 0,
                },
                calculable: true,
                series: [
                    {
                        name: "漏斗图",
                        type: "funnel",
                        left: "10%",
                        top: 60,
                        bottom: 60,
                        width: "80%",
                        min: 0,
                        max: 100,
                        minSize: "0%",
                        maxSize: "100%",
                        sort: "descending",
                        gap: 2,
                        label: {
                            show: true,
                            position: "inside",
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: "solid",
                            },
                        },
                        itemStyle: {
                            borderColor: "#fff",
                            borderWidth: 1,
                        },
                        emphasis: {
                            label: {
                                fontSize: 20,
                            },
                        },
                        data: [
                            { value: 80, name: "底层维护" },
                            { value: 60, name: "水印保护" },
                            { value: 35, name: "加强防护" },

                        ],
                    },
                ],
            },
            //第四个
            chartData4: {
                legend: {
                    data: ["2022", "2023"],
                },
                radar: {
                    name: {
                        textStyle: {
                            color: "#fff",
                            backgroundColor: "#999",
                            borderRadius: 3,
                            padding: [3, 5],
                        },
                    },
                    indicator: [
                        { name: "安全性", max: 100 },
                        { name: "吞吐量", max: 100 },
                        { name: "可扩展性", max: 100 },
                        { name: "并发数", max: 100 },
                        { name: "稳定性", max: 100 },
                    ],
                },
                series: [
                    {
                        type: "radar",
                        data: [
                            {
                                name: "2023",
                                value: [74, 77, 68, 84, 85],
                            },
                            {
                                name: "2024",
                                value: [85, 85, 80, 97, 90],
                            },
                        ],
                    },
                ],
            },
            //第五个
            chartData5: {
                tooltip: {
                    trigger: "item",
                    triggerOn: "mousemove",
                },
                series: [
                    {
                        type: "sankey",
                        layout: "none",
                        data: [
                            { name: "用户", itemStyle: { color: "#40a9ff" } },
                            { name: "交易", itemStyle: { color: "#69c0ff" } },
                            { name: "收益", itemStyle: { color: "#1890ff" } },
                            { name: "投资", itemStyle: { color: "#096dd9" } },
                            { name: "服务", itemStyle: { color: "#0050b3" } },
                            { name: "其他", itemStyle: { color: "#003a8c" } },
                        ],
                        links: [
                            { source: "用户", target: "交易", value: 100 },
                            { source: "用户", target: "收益", value: 50 },
                            { source: "用户", target: "投资", value: 30 },
                            { source: "用户", target: "服务", value: 20 },
                            { source: "用户", target: "其他", value: 10 },
                            { source: "交易", target: "收益", value: 80 },
                            { source: "交易", target: "其他", value: 20 },
                            { source: "收益", target: "其他", value: 30 },
                            { source: "投资", target: "服务", value: 10 },
                            { source: "服务", target: "其他", value: 10 },
                        ],
                        label: {
                            color: "#000",
                            fontSize: 16,
                        },
                        lineStyle: {
                            color: "gradient",
                            curveness: 0.5,
                        },
                    },
                ],
            },
            //第六个
            chartData6: {
                legend: {
                    data: ["访问量", "停留时间"],
                },
                xAxis: {
                    type: "value",
                    nameLocation: "middle",
                    nameTextStyle: {
                        fontSize: 14,
                    },
                    splitLine: {
                        show: false,
                    },
                },
                yAxis: {
                    type: "value",
                    nameLocation: "middle",
                    nameTextStyle: {
                        fontSize: 14,
                    },
                    splitLine: {
                        show: false,
                    },
                },
                series: [
                    {
                        name: "访问量",
                        type: "scatter",
                        data: [
                            [100, 10],
                            [300, 15],
                            [500, 20],
                            [700, 25],
                            [900, 30],
                            [1100, 35],
                        ],
                        symbolSize: function (data) {
                            return Math.sqrt(data[1]) * 10;
                        },
                        label: {
                            emphasis: {
                                show: true,
                                formatter: function (param) {
                                    return (
                                        param.data[0] + "访问量, " + param.data[1] + "秒停留时间"
                                    );
                                },
                                position: "top",
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#50a3ba",
                            },
                        },
                    },
                    {
                        name: "停留时间",
                        type: "scatter",
                        data: [
                            [100, 5],
                            [300, 10],
                            [500, 15],
                            [700, 20],
                            [900, 25],
                            [1100, 30],
                        ],
                        symbolSize: function (data) {
                            return Math.sqrt(data[1]) * 10;
                        },
                        label: {
                            emphasis: {
                                show: true,
                                formatter: function (param) {
                                    return (
                                        param.data[0] + "访问量, " + param.data[1] + "秒停留时间"
                                    );
                                },
                                position: "top",
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#e7505a",
                            },
                        },
                    },
                ],
            },
        };
    },
    mounted() {
        this.initChart();
        this.initChart2();
        this.initChart3();
        this.initChart4();
        this.initChart5();
        this.initChart6();
    },
    methods: {
        initChart() {
            const chartDom = this.$refs.chartContainer;
            const myChart = echarts.init(chartDom);
            myChart.setOption(this.chartData);
        },
        initChart2() {
            const chartDom2 = this.$refs.chartContainer2;
            const myChart2 = echarts.init(chartDom2);
            myChart2.setOption(this.chartData2);
        },
        initChart3() {
            const chartDom3 = this.$refs.chartContainer3;
            const myChart3 = echarts.init(chartDom3);
            myChart3.setOption(this.chartData3);
        },
        initChart4() {
            const chartDom4 = this.$refs.chartContainer4;
            const myChart4 = echarts.init(chartDom4);
            myChart4.setOption(this.chartData4);
        },
        initChart5() {
            const chartDom5 = this.$refs.chartContainer5;
            const myChart5 = echarts.init(chartDom5);
            myChart5.setOption(this.chartData5);
        },
        initChart6() {
            const chartDom6 = this.$refs.chartContainer6;
            const myChart6 = echarts.init(chartDom6);
            myChart6.setOption(this.chartData6);
        },
    },
};
</script>

<style lang="less" scoped>
.otherInfo {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    height: 80vh;
    .el-card{
        width: 30%;
        margin-top: 20px;
        .chart{
            width: 400px;
            height: 400px;
        }
    }
}
</style>