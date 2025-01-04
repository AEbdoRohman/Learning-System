import axios from "axios";
import { Menubar } from "primereact/menubar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../api/api";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]); // الأقسام
  const [categoryItems, setCategoryItems] = useState([]); // العناصر النهائية

  // fetch the categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Fetching categories...");
        const response = await axios.get(`${baseurl}/category`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53`,
            lang: i18n.language,
          },
        });

        console.log("Categories fetched:", response.data.categories);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [i18n.language]);

  // add the subcategories to each category
  useEffect(() => {
    const fetchGrades = async () => {
      if (categories.length === 0) return;

      console.log("Fetching grades for each category...");
      const items = await Promise.all(
        categories.map(async (category) => {
          try {
            const response = await axios.get(
              `${baseurl}/categories/${category.id}/subcategories`, // استخدام الـ id الخاص بالقسم
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer 5|1Q8vzifRZTUdzM51sJkxIOuQ0uCqoAcR31EaiC9Ea452fb53`,
                  lang: i18n.language,
                },
              }
            );

            console.log(
              `Grades for category ${category.name}:`,
              response.data.grades
            );

            // class name
            const grades = response.data.subcategories.map((grade) => ({
              label: grade.name, // class name
              command: () => navigate(`/courses/${grade.id}`), // الرابط الخاص بالصف
            }));

            // return an object with label and items
            return {
              label: category.name, // class name
              command: () => navigate(`/courses`),
              items: grades, // grades
            };
          } catch (error) {
            console.error(
              `Error fetching grades for category ${category.id}:`,
              error
            );
            return {
              label: category.name,
              command: () => navigate("/courses"),
              items: [],
            }; // return an object with label and items
          }
        })
      );

      setCategoryItems(items); // set the items
    };

    fetchGrades();
  }, [categories, i18n.language, navigate]);

  // static items
  const staticItems = [
    {
      label: t("header.home"),
      command: () => navigate("/"),
    },
    {
      label: t("header.news"),
      command: () => navigate("/about"),
    },
    {
      label: t("header.accreditations"),
      command: () => navigate("/blog"),
    },
    {
      label: t("header.members"),
      command: () => navigate("/gallery"),
    },
    {
      label: t("header.registration"),
      command: () => navigate("/contact"),
    },
    {
      label: t("header.statistics"),
      command: () => navigate("/contact"),
    },
    {
      label: t("header.contact"),
      command: () => navigate("/contact"),
    },
  ];

  // dynamic items
  const items = [
    ...staticItems,
    {
      label: t("header.activities"),
      items: categoryItems, // grades
    },
  ];

  return (
    <div className="container mx-auto">
      <Menubar
        model={items}
        className="w-full bg-transparent border-none text-[1.1rem] font-semibold py-1"
        p-cascadeselect-items
      />
    </div>
  );
}
