import { BarIcon } from "../components/icons/categories/BarIcon";
import { CarIcon } from "../components/icons/categories/CarIcon";
import { ElectricityIcon } from "../components/icons/categories/ElectricityIcon";
import { FoodIcon } from "../components/icons/categories/FoodIcon";
import { GiftIcon } from "../components/icons/categories/GiftIcon";
import { GymIcon } from "../components/icons/categories/GymIcon";
import { HealthIcon } from "../components/icons/categories/HealthIcon";
import { HolidayIcon } from "../components/icons/categories/HolidayIcon";
import { HouseIcon } from "../components/icons/categories/HouseIcon";
import { IncomeIcon } from "../components/icons/general/IncomeIcon";
import { LoanIcon } from "../components/icons/categories/LoanIcon";
import { OutcomeIcon } from "../components/icons/general/OutcomeIcon";
import { RestaurantIcon } from "../components/icons/categories/RestaurantIcon";
import { SalaryIcon } from "../components/icons/categories/SalaryIcon";
import { ShopIcon } from "../components/icons/categories/ShopIcon";
import { StudiesIcon } from "../components/icons/categories/StudiesIcon";
import { TransportIcon } from "../components/icons/categories/TransportIcon";
import { WaterIcon } from "../components/icons/categories/WaterIcon";
import { TransferIcon } from "../components/icons/categories/TransferIcon";

export const getIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "bars":
      return BarIcon();
    case "car":
      return CarIcon();
    case "electricity":
      return ElectricityIcon();
    case "food":
      return FoodIcon();
    case "gift":
      return GiftIcon();
    case "gym":
      return GymIcon();
    case "health":
      return HealthIcon();
    case "holidays":
      return HolidayIcon();
    case "home":
      return HouseIcon();
    case "income":
      return IncomeIcon();
    case "outcome":
      return OutcomeIcon();
    case "restaurant":
      return RestaurantIcon();
    case "shop":
      return ShopIcon();
    case "salary":
      return SalaryIcon();
    case "studies":
      return StudiesIcon();
    case "transport":
      return TransportIcon();
    case "water":
      return WaterIcon();
    case "loan":
      return LoanIcon();
    case "transfer":
      return TransferIcon();
    default:
      return "💸";
  }
};
