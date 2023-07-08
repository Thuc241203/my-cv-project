import ProjectDetail from "./components/home/projectDetail";
import { render, router } from "./lib";
import Add from "./pages/admin/add";
import CategoryAdmin from "./pages/admin/category";
import CategoryAdd from "./pages/admin/categoryAdd";
import CategoryEdit from "./pages/admin/categoryEdit";
import ContactAdmin from "./pages/admin/contact";
import ContactEdit from "./pages/admin/contactEdit";
import EditAdmin from "./pages/admin/edit";
import Edit from "./pages/admin/editProject";
import HomePage from "./pages/admin/home";
import ProjectAdmin from "./pages/admin/project";
import UserAdmin from "./pages/admin/user";
import UserEdit from "./pages/admin/userEdit";
import Project from "./pages/home/home";
import LoginHome from "./pages/home/login";

const app = document.querySelector("#app");

router.on("/", () => render(Project, app));
router.on("/Login", () => render(LoginHome, app));

router.on("/admin/home", () => render(HomePage, app));
router.on("/admin/edit/:id", ({ data }) => render(() => EditAdmin(data), app));

router.on("/Category", () => render(CategoryAdmin, app));
router.on("/Category/Add", () => render(CategoryAdd, app));
router.on("/Category/edit/:id", ({ data }) => render(() => CategoryEdit(data), app)); 

router.on("/Project", () => render(ProjectAdmin, app));
router.on("/Add", () => render(Add, app));
router.on("/Edit/:id", ({ data }) => render(() => Edit(data), app));

router.on("/Contact", () => render(ContactAdmin, app));
router.on("/Contact/Edit", () => render( ContactEdit, app));

router.on("/User", () => render(UserAdmin, app));
router.on("/User/Edit", () => render(UserEdit, app));


router.on("/ProjectDetail/:id", ({ data }) =>

  render(() => ProjectDetail(data), app)
);

router.notFound(() => render(NotFoundPage, app));
router.resolve();
