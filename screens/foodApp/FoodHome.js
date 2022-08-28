import {
	ImageBackground,
	Text,
	TouchableOpacity,
	View,
	Image,
	SafeAreaView,
	ScrollView,
	TextInput,
	Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DATA from "./data/Restaurant/DATA";
import colors from "./data/Restaurant/colors";
import SPACING from "./data/SPACING";
import RecipeDetailScreen from "./RecipeDetailScreen";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width / 2 - SPACING * 3;

const FoodHome = () => {
	const [iniciar, setIniciar] = useState(true)
	const [restaurantDetail, setRestaurantDetail] = useState(null)

	const [activeCategory, setActiveCategory] = useState(0);

	return (
		<>
			{
				iniciar ? (
					<ImageBackground
						style={{ flex: 1 }}
						source={require("./images/pexels-william-choquette-2641886.jpeg")}
					>
						<View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
						<View
							style={{
								position: "absolute",
								height: "100%",
								zIndex: 2,
								width: "100%",
								justifyContent: "flex-end",
								paddingHorizontal: SPACING * 2,
								paddingBottom: SPACING * 5,
							}}
						>
							<View>
								<Text
									style={{
										color: colors.white,
										fontWeight: "800",
										fontSize: SPACING * 4.5,
										textTransform: "capitalize",
									}}
								>
									Let your favorite food find you
								</Text>
								<Text
									style={{
										color: colors.white,
										fontWeight: "600",
										fontSize: SPACING * 1.7,
									}}
								>
									Dolore reprehenderit id ea eu voluptate deserunt occaecat occaecat.
								</Text>
								<TouchableOpacity
									style={{
										padding: SPACING * 2,
										backgroundColor: colors.white,
										borderRadius: SPACING * 2,
										alignItems: "center",
										marginTop: SPACING * 3,
									}}
									onPress={() => setIniciar(false)}
								>
									<Text
										style={{
											color: colors.black,
											fontSize: SPACING * 2,
											fontWeight: "700",
										}}
									>
										Explorer Now
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</ImageBackground>
				) : restaurantDetail == null ? (
					<SafeAreaView>
						<ScrollView>
							<View style={{ padding: SPACING * 2 }}>
								<View
									style={{ flexDirection: "row", justifyContent: "space-between" }}
								>
									<View style={{ flexDirection: "row", alignItems: "center" }}>
										<Image
											style={{
												width: SPACING * 4.5,
												height: SPACING * 4.5,
												borderRadius: SPACING * 3,
												marginRight: SPACING,
											}}
											source={require("./images/restaurant/avatar.jpg")}
										/>
										<Text
											style={{
												fontSize: SPACING * 1.7,
												fontWeight: "800",
												color: colors.dark,
											}}
										>
											Erikaasav
										</Text>
									</View>
									<View style={{ flexDirection: "row", alignItems: "center" }}>
										<TouchableOpacity style={{ marginRight: SPACING }}>
											<Ionicons
												name="notifications-outline"
												size={SPACING * 3.5}
												color={colors.dark}
											/>
										</TouchableOpacity>
										<TouchableOpacity>
											<Ionicons
												name="menu"
												size={SPACING * 3.5}
												color={colors.dark}
											/>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ width: "60%", marginTop: SPACING * 2 }}>
									<Text style={{ fontSize: SPACING * 3, fontWeight: "700" }}>
										What would you like to order?
									</Text>
								</View>
								<View
									style={{
										flexDirection: "row",
										backgroundColor: colors.light,
										marginVertical: SPACING * 3,
										padding: SPACING * 1.5,
										borderRadius: SPACING,
									}}
								>
									<Ionicons name="search" color={colors.gray} size={SPACING * 2.7} />
									<TextInput
										placeholder="Want to .."
										placeholderTextColor={colors.gray}
										style={{
											color: colors.gray,
											fontSize: SPACING * 2,
											marginLeft: SPACING,
										}}
									/>
								</View>
								<ScrollView horizontal>
									{DATA.map((category, index) => (
										<TouchableOpacity
											style={{ marginRight: SPACING * 3 }}
											key={index}
											onPress={() => setActiveCategory(index)}
										>
											<Text
												style={[
													{
														fontSize: SPACING * 1.7,
														fontWeight: "600",
														color: colors.gray,
													},
													activeCategory === index && {
														color: colors.black,
														fontWeight: "700",
														fontSize: SPACING * 1.8,
													},
												]}
											>
												{category.title}
											</Text>
										</TouchableOpacity>
									))}
								</ScrollView>
								<View
									style={{
										flexDirection: "row",
										flexWrap: "wrap",
										justifyContent: "space-between",
										marginVertical: SPACING * 2,
									}}
								>
									{DATA[activeCategory].recipes.map((item) => (
										<TouchableOpacity
											style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
											key={item.id}
											onPress={() => setRestaurantDetail(item)}
										>
											<Image
												style={{
													width: "100%",
													height: ITEM_WIDTH + SPACING * 3,
													borderRadius: SPACING * 2,
												}}
												source={item.image}
											/>
											<Text
												style={{
													fontSize: SPACING * 2,
													fontWeight: "700",
													marginTop: SPACING,
												}}
											>
												{item.name}
											</Text>
											<Text
												style={{
													fontSize: SPACING * 1.5,
													color: colors.gray,
													marginVertical: SPACING / 2,
												}}
											>
												Today discount {item.discount}
											</Text>
											<Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
												$ {item.price}
											</Text>
										</TouchableOpacity>
									))}
								</View>
							</View>
						</ScrollView>
					</SafeAreaView>
				) : (
					<RecipeDetailScreen recipe={restaurantDetail} setRestaurantDetail={setRestaurantDetail} />
				)
			}
		</>

	)
}

export default FoodHome