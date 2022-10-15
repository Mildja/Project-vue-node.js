import { createRouter, createWebHistory } from "vue-router";
import publish from "@/views/publish.vue";
import oganization from "@/views/Oganization.vue";
import documents from "@/views/Documents.vue";
import SignIn from "@/views/SignIn.vue";

import Profile from "@/views/student/Profile.vue";
import Rtl from "@/views/student/Rtl.vue";
import SignUp from "@/views/student/SignUp.vue";
import VirtualReality from "@/views/student/VirtualReality.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/publish",
    
  },
  {
    path: "/publish",
    name: "Publish",
    component: publish,
  },
  {
    path: "/oganization",
    name: "Oganization",
    component: oganization,
  },
  {
    path: "/documents",
    name: "Documents",
    component: documents,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
