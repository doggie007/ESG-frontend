<template>
	<v-app>
		<v-container class="pl-6 mt-15">
			<h2>Not bothered to read 10 pages of sustainability reports?</h2>
			<h3>Our summariser condenses the text into 1-20 sentences!</h3>
		</v-container>
		<v-container align="center" justify="center">
			<v-col cols="10">
				<v-row justify="center" align="center">
					<v-col cols="9">
						<v-textarea
							outlined
							label="Copy-paste the text here"
							v-model="document"
						></v-textarea>
					</v-col>
					<v-col>
						<v-text-field
							v-model="num_lines"
							label="No. of lines"
						></v-text-field>
					</v-col>
					<v-col>
						<v-btn @click="getSummary()"> Summarise </v-btn>
					</v-col>
				</v-row>

				<v-row justify="center">
					<v-progress-circular
						v-show="spinner"
						:size="40"
						:width="5"
						color="purple"
						indeterminate
					></v-progress-circular>

					<v-textarea v-show="!spinner && returned" outlined v-model="summary">
						{{ summary }}
					</v-textarea>
				</v-row>
			</v-col>
		</v-container>
	</v-app>
</template>
<script>
import { axiosBase } from "../api/axios-base.js";
export default {
	name: "summary",
	data: () => ({
		document: null,
		num_lines: 3,
		summary: null,
		spinner: false,
		returned: false,
	}),
	methods: {
		getSummary() {
			// remove all line breaks
			this.document = this.document.replace(/(\r\n|\n|\r)/gm, "");
			this.spinner = true;
			axiosBase
				.get("/analysis/", {
					params: {
						document: this.document,
						lines: this.num_lines,
					},
				})
				.then((response) => {
					console.log("Got summary successfully");
					console.log(response.data);
					this.summary = response.data.summary.summary;
					this.spinner = false;
					this.returned = true;
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>
