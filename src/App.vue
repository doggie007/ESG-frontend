<template>
	<v-app>
		<v-app-bar color="blue" dense dark absolute>
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
			<v-toolbar-title>ESG</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-magnify</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Search</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-school</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Learn about ESG</v-list-item-title>
					</v-list-item>

					<v-list-item @click="$router.push('about')">
						<v-list-item-icon>
							<v-icon>mdi-information-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title>How this was made</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<router-view />
		<v-main> </v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",

	data: () => ({
		drawer: false,
		group: null,
	}),
};
</script>
