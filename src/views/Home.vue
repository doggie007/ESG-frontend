<template>
	<v-app>
		<v-card elevation="2" outlined class="mx-auto my-13" min-width="600">
			<v-form>
				<v-container>
					<v-row align="center" justify="center">
						<h1>Search for ESG data</h1>
					</v-row>
					<v-row align="center" justify="center">
						<v-col cols="11" sm="5">
							<v-text-field
								label="Ticker Symbol"
								:rules="rules"
								filled
								v-model="ticker"
							></v-text-field>
						</v-col>

						<v-col cols="11" sm="5">
							<v-text-field
								label="Company Name"
								:rules="rules"
								filled
								v-model="company"
							></v-text-field>
						</v-col>
						<v-col cols="11" sm="1" class="pb-8">
							<v-btn @click="getEsg()" fab dark small color="primary">
								<v-icon dark> mdi-magnify </v-icon>
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-card>
		<v-container v-show="spinner">
			<v-row align="center" justify="center">
				<v-progress-circular
					indeterminate
					color="primary"
				></v-progress-circular>
			</v-row>
		</v-container>
		<v-container fluid v-show="returned && !spinner" v-cloak>
			<v-row>
				<v-col>
					<v-card height="300" align="center" justify="center">
						<h2>Sustainalytics</h2>

						<p v-if="yahoo == null">No data available</p>
						<v-col v-else justify="center">
							<v-row align="center" justify="center">
								<p>
									Overall risk score:
									<span v-bind:class="yahooESGScore(yahoo.yahoo_total_score)">
										{{ yahoo.yahoo_total_score }}</span
									>
								</p>
							</v-row>
							<v-row align="center" justify="center"
								><p>
									Overall risk rating:
									<span v-bind:class="yahooESGScore(yahoo.yahoo_total_score)">{{
										yahoo.yahoo_total_rating
									}}</span>
								</p></v-row
							>
							<v-row align="center" justify="center"
								><p>Overall Percentile: {{ yahoo.yahoo_percentile }}</p></v-row
							>
							<v-row align="center" justify="center"
								>Environmental risk score: {{ yahoo.yahoo_e }}</v-row
							>
							<v-row align="center" justify="center"
								>Social risk score: {{ yahoo.yahoo_s }}</v-row
							>
							<v-row align="center" justify="center"
								>Governance risk score: {{ yahoo.yahoo_g }}</v-row
							>
						</v-col>
					</v-card>
				</v-col>
				<v-col>
					<v-card height="300" align="center" justify="center">
						<h2>Enterprise API</h2>
						<p v-if="enterprise == null">No data available</p>
						<v-col v-else>
							<v-row align="center" justify="center"
								><p>
									Overall grade:
									<span
										v-bind:class="
											enterpriseESGGrade(enterprise.api_total_grade)
										"
										>{{ enterprise.api_total_grade }}</span
									>
								</p></v-row
							>
							<v-row align="center" justify="center"
								><p>
									Overall level:
									<span
										v-bind:class="
											enterpriseESGGrade(enterprise.api_total_level)
										"
										>{{ enterprise.api_total_level }}</span
									>
								</p>
							</v-row>
							<v-row align="center" justify="center"
								><p>
									Environment grade:
									<span
										v-bind:class="enterpriseESGGrade(enterprise.api_egrade)"
										>{{ enterprise.api_egrade }}</span
									>
									<span
										v-bind:class="enterpriseESGGrade(enterprise.api_elevel)"
										>{{ enterprise.api_elevel }}</span
									>
								</p></v-row
							>
							<v-row align="center" justify="center"
								><p>
									Social grade:
									<span
										v-bind:class="enterpriseESGGrade(enterprise.api_sgrade)"
										>{{ enterprise.api_sgrade }}</span
									>
									<span
										v-bind:class="enterpriseESGGrade(enterprise.api_slevel)"
										>{{ enterprise.api_slevel }}</span
									>
								</p></v-row
							>
							<v-row align="center" justify="center"
								><p>
									Governance grade:
									<span
										v-bind:class="enterpriseESGGrade(enterprise.api_ggrade)"
									>
										{{ enterprise.api_ggrade }}</span
									>

									<span
										v-bind:class="enterpriseESGGrade(enterprise.api_glevel)"
									>
										{{ enterprise.api_glevel }}</span
									>
								</p></v-row
							>
						</v-col>
					</v-card>
				</v-col>
				<v-col>
					<v-card height="300" align="center" justify="center">
						<h2>Sustainable.com</h2>
						<p v-if="sustainable == null">No data available</p>
						<v-col v-else align="center" justify="center">
							<v-row align="center" justify="center"
								>Overall score: {{ sustainable.sust_overall_score }}</v-row
							>
							<v-row align="center" justify="center"
								>Overall rank: {{ sustainable.sust_overall_rank }} out of
								{{ sustainable.sust_total_out_of }}</v-row
							>
							<v-row align="center" justify="center"
								>Industry rank: {{ sustainable.sust_industry_rank }} out of
								{{ sustainable.sust_industry_out_of }}</v-row
							>
							<v-row align="center" justify="center"
								>Environment score: {{ sustainable.sust_e }}</v-row
							>
							<v-row align="center" justify="center"
								>Environment rank: {{ sustainable.sust_erank }} out of
								{{ sustainable.sust_industry_out_of }}</v-row
							>
							<v-row align="center" justify="center"
								>Social score: {{ sustainable.sust_s }}</v-row
							>
							<v-row align="center" justify="center"
								>Social score: {{ sustainable.sust_srank }} out of
								{{ sustainable.sust_industry_out_of }}</v-row
							>
							<v-row align="center" justify="center"
								>Governance score: {{ sustainable.sust_g }}</v-row
							>
							<v-row align="center" justify="center"
								>Governance score: {{ sustainable.sust_grank }} out of
								{{ sustainable.sust_industry_out_of }}</v-row
							>
						</v-col>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
import { axiosBase } from "../api/axios-base.js";
export default {
	name: "Home",
	data: () => ({
		rules: [(value) => !!value || "Required."],
		ticker: "NVDA",
		company: "Nvidia",
		spinner: false,
		yahoo: null,
		returned: false,
		enterprise: null,
		sustainable: null,
	}),
	methods: {
		sleep(ms) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		},
		async getEsg() {
			this.spinner = true;
			axiosBase
				.get("/esg/", {
					params: {
						ticker: this.ticker,
						company: this.company,
					},
				})
				.then((response) => {
					console.log("Got ESG successfully");
					console.log(response.data);
					var data = response.data;
					this.yahoo = data.yahoo;
					this.enterprise = data.enterprise;
					this.sustainable = data.sustainable;
				})
				.catch((err) => {
					console.log(err);
				});
			await this.sleep(1500);
			this.spinner = false;
			this.returned = true;
		},
		enterpriseESGGrade(grade) {
			var red = false,
				green = false,
				orange = false;
			if (grade == "D" || grade == "DD" || grade == "DDD" || grade == "Low") {
				red = true;
			} else if (
				grade == "C" ||
				grade == "CC" ||
				grade == "CCC" ||
				grade == "B" ||
				grade == "BB" ||
				grade == "BBB" ||
				grade == "Medium"
			) {
				orange = true;
			} else {
				green = true;
			}
			return {
				"red--text": red,
				"orange--text": orange,
				"green--text": green,
			};
		},
		yahooESGScore(score) {
			score = parseInt(score);
			var red = false,
				green = false,
				orange = false;
			if (score <= 20) {
				green = true;
			} else if (score <= 35) {
				orange = true;
			} else {
				red = true;
			}
			return {
				"red--text": red,
				"orange--text": orange,
				"green--text": green,
			};
		},
	},
};
</script>
<style scoped>
span::after {
	content: " ";
}
</style>
