import { FC, SetStateAction, useContext } from "react";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import SizesFilter from "./SizesFilter";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch } from "../../store/store";
import { fetchSneakers } from "../../store/slices/sneakersSlice";
import { getBaseLimit } from "../../store/slices/dataSlice";
import ButtonLight from "../Buttons/ButtonLight/button";
import style from "./style.module.css";
import ButtonDark from "../Buttons/ButtonDark/button";
import { ThemeContext } from "../../App";

interface IProps {
  setFilterValue: React.Dispatch<
    React.SetStateAction<() => (sneakers: any[]) => any[]>
  >;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

export interface IFormData {
  startPrice: number;
  endPrice: number;
  gender: string;
  sizes: number[];
}

const CatalogFilter: FC<IProps> = ({ setFilterValue, setGender }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useContext(ThemeContext)!;

  const backgroundStyle =
    theme === "dark"
      ? { background: "none" }
      : { background: "rgba(255, 244, 238, 1)" };

  const { register, handleSubmit, setValue, reset } = useForm<IFormData>({
    defaultValues: {
      startPrice: 1850,
      endPrice: 25768,
      gender: "",
      sizes: [],
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setGender(data.gender);
    setFilterValue(
      () => (sneakers: any[]) =>
        sneakers.filter((sneaker) => sneaker.gender === data.gender)
    );
    dispatch(
      fetchSneakers({
        priceFrom: data.startPrice,
        priceTo: data.endPrice,
        gender: data.gender,
        sizes: data.sizes,
        isLoading: false,
        isError: false,
        data: [],
      })
    );
  };

  const handleReset = () => {
    reset(); // Сбрасываем значения формы до начальных
    setGender(""); // Сбрасываем пол
    setFilterValue(() => (sneakers: any) => sneakers); // Сбрасываем фильтр
    dispatch(getBaseLimit()); // Вызываем сброс лимита
  };

  return (
    <form
      className={style.container}
      style={backgroundStyle}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className={style.title}>Подбор по параметрам</h3>

      <PriceFilter register={register} setValue={setValue} />
      <GenderFilter
        setValue={setValue}
        setGender={setGender}
        setFilterValue={function (
          _value: SetStateAction<() => (sneakers: any[]) => any[]>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <SizesFilter setValue={setValue} />

      <div className={style.button_light}>
        <ButtonDark
          text="Применить"
          type="submit"
          onClick={() => dispatch(getBaseLimit())}
        />
        <ButtonLight text="Сбросить" onClick={handleReset} type="button" />
      </div>
    </form>
  );
};

export default CatalogFilter;
