import * as yup from "yup";

export const schema = yup.object().shape({
  userName: yup
    .string()
    .min(4, "حداقل 4 حرف.")
    .max(16, "حداکثر 16 حرف.")
    .required("نام کاربری الزامی است.")
    .matches(/^[a-zA-Z0-9]*$/, { message: "شامل اعداد و حروف انگلیسی باشد." }),
  password: yup
    .string()
    .min(5, "حداقل 5 حرف.")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
      message: "شامل اعداد و حروف انگلیسی باشد.",
    })
    .required("رمز الزامی است."),
});

export const deliverySchema = yup.object().shape({
  firstName: yup
    .string()
    .required("نام الزامی است.")
    .min(4, "حداقل 4 حرف.")
    .matches(/^[\u0600-\u06FF\s]+$/, {
      message: "حروف فارسی",
    })
    .max(16, "حداکثر 16 حرف."),
  lastName: yup
    .string()
    .required("نام خانوادگی الزامی است.")
    .min(4, "حداقل 4 حرف.")
    .matches(/^[\u0600-\u06FF\s]+$/, {
      message: "حروف فارسی",
    })
    .max(32, "حداکثر 32 حرف."),
  address: yup
    .string()
    .required("آدرس الزامی است.")
    .min(20, "حداقل 10 حرف.")
    .matches(/^[\u0600-\u06FF\s]+$/, {
      message: "حروف فارسی",
    })
    .max(320, "حداکثر 320 حرف."),
});

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("نام الزامی است.")
    .min(3, "حداقل 3 حرف.")
    .matches(/^[\u0600-\u06FF\s]+$/, {
      message: "حروف فارسی",
    })
    .max(16, "حداکثر 16 حرف."),
  lastName: yup
    .string()
    .required("نام خانوادگی الزامی است.")
    .min(3, "حداقل 3 حرف.")
    .matches(/^[\u0600-\u06FF\s]+$/, {
      message: "حروف فارسی",
    })
    .max(32, "حداکثر 32 حرف."),
  address: yup
    .string()
    .required(".آدرس الزامی است")
    .min(20, "حداقل 20 حرف.")
    .matches(/^[\u0600-\u06FF\s]+$/, {
      message: "حروف فارسی",
    })
    .max(320, "حداکثر 320 حرف."),
  phoneNumber: yup
    .string()
    .required(".شماره همراه الزامی است")
    .min(10, "حداقل 10 عدد.")
    .matches(/^[0-9]+$/, { message: "فقط اعداد" }),
  deliveryDate: yup
    .date()
    .required("تاریخ تحول الزامی است.")
    .min(new Date(), "تاریخ تحویل نمی‌تواند در گذشته باشد."),
});
