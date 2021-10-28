<template>
	<v-app>
		<v-parallax height="720" src="../assets/wind-turbine.jpg">
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12">
					<h1 class="text-h4 font-weight-thin mb-4">Investures</h1>
					<h4 class="subheading">Invest in our Futures</h4>
				</v-col>
			</v-row>
		</v-parallax>
		<div class="max-height">
			<v-container>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12">
						<h1>What is ESG?</h1>
						<h4 class="subheading text-justify">
							Environmental, social, and governance (ESG) criteria are a set of
							standards for a company’s operations that socially conscious
							investors use to screen potential investments.
							<br />
							ESG is often called sustainability and investing in good ESG
							stocks is known as socially responsible investing or impact
							investing.
							<br />
							By investing in ESG funds, not only will you get better returns
							(beat the S&P500 in 2021), but you will also help make the world a
							better and happier place by helping companies that care for the
							environment and people.
						</h4>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4" class="text-center">
						<v-card height="550">
							<p class="green--text">Environmental</p>

							<p class="text-justify">
								Environmental criteria may include a company’s energy use,
								waste, pollution, natural resource conservation, and treatment
								of animals. The criteria can also be used in evaluating any
								environmental risks a company might face and how the company is
								managing those risks.
							</p>
							<!-- <v-spacer></v-spacer> -->
							<img
								width="100%"
								src="../assets/environment-vector.png"
								alt="Environment"
							/>
						</v-card>
					</v-col>
					<v-col cols="4" class="text-center">
						<v-card height="550"
							><p class="blue--text">Social</p>
							<p class="text-justify">
								Companies have a responsibility for their employees as well as
								their impact on the societies in which they operate – for
								instance in terms of working conditions, labour rights, and
								inclusion + diversity.
							</p>
							<!-- <v-spacer></v-spacer> -->
							<img width="100%" src="../assets/social.jpg" alt="Social" />
						</v-card>
					</v-col>
					<v-col cols="4" class="text-center">
						<v-card height="550"
							><p class="orange--text">Governance</p>
							<p class="text-justify">
								Governance can serve as a control mechanism in relation to
								bribery and corruption, tax, executive remuneration,
								shareholders’ voting possibilities and internal control.
							</p>
							<img
								width="100%"
								src="../assets/governance.jpg"
								alt="Governance"
							/>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</v-app>
</template>

<script>
export default {
	name: "About",
};
</script>
<style scoped>
.max-height {
	height: 100vh;
}
</style>
