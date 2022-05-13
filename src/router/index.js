import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: () =>
            import ( /* webpackChunkName: "contact" */ '../views/ContactUs.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () =>
            import ( /* webpackChunkName: "registration" */ '../views/Registration.vue')
    },
    {
        path: '/information/faculty-notification',
        name: 'FacultyNotification',
        component: () =>
            import ( /* webpackChunkName: "faculty-notification" */ '../views/FacultyNotification.vue')
    },
    {
        path: '/information/academic-accomodations',
        name: 'AcademicAccomodations',
        component: () =>
            import ( /* webpackChunkName: "information" */ '../views/information/AcademicAccomodations.vue')
    },
    {
        path: '/information/grievance-procedure',
        name: 'GrievanceProcedure',
        component: () =>
            import ( /* webpackChunkName: "information" */ '../views/information/GrievanceProcedure.vue')
    },
    {
        path: '/information/support-documentation',
        name: 'SupportDocumentation',
        component: () =>
            import ( /* webpackChunkName: "information" */ '../views/information/SupportDocumentation.vue')
    },
    {
        path: '/information/temporary-conditions',
        name: 'TemporaryConditions',
        component: () =>
            import ( /* webpackChunkName: "information" */ '../views/information/TemporaryConditions.vue')
    },
    {
        path: '/services/colorado-community-resources',
        name: 'ColoradoCommunityResources',
        component: () =>
            import ( /* webpackChunkName: "services" */ '../views/services/ColoradoCommunityResources.vue')
    },
    {
        path: '/services/online-disability-resources',
        name: 'OnlineDisabilityResources',
        component: () =>
            import ( /* webpackChunkName: "services" */ '../views/services/OnlineDisabilityResources.vue')
    },
    {
        path: '/services/sensusaccess',
        name: 'SensusAccess',
        component: () =>
            import ( /* webpackChunkName: "services" */ '../views/services/SensusAccess.vue')
    },
    {
        path: '/services/student-assistance-program',
        name: 'StudentAssistanceProgram',
        component: () =>
            import ( /* webpackChunkName: "services" */ '../views/services/StudentAssistanceProgram.vue')
    },
    {
        path: '/services/wellness-materials',
        name: 'WellnessMaterials',
        component: () =>
            import ( /* webpackChunkName: "services" */ '../views/services/WellnessMaterials.vue')
    },
    {
        path: '/services/webinars',
        name: 'Webinars',
        component: () =>
            import ( /* webpackChunkName: "services" */ '../views/services/Webinars.vue')
    },
    {
        path: '/accessible-education/accessibility-policy',
        name: 'AccessibilityPolicy',
        component: () =>
            import ( /* webpackChunkName: "accessible-education" */ '../views/accessible-education/AccessibilityPolicy.vue')
    },
    {
        path: '/accessible-education/assistive-tools-and-resources',
        name: 'AssistiveToolsAndResources',
        component: () =>
            import ( /* webpackChunkName: "accessible-education" */ '../views/accessible-education/AssistiveToolsAndResources.vue')
    },
    {
        path: '/accessible-education/iac-information',
        name: 'IACInformation',
        component: () =>
            import ( /* webpackChunkName: "accessible-education" */ '../views/accessible-education/IACInformation.vue')
    },
    {
        path: '/accessible-education/role-of-faculty-and-staff',
        name: 'RoleOfFacultyAndStaff',
        component: () =>
            import ( /* webpackChunkName: "accessible-education" */ '../views/accessible-education/RoleOfFacultyAndStaff.vue')
    },
    {
        path: '/career-resources/disability-laws-and-rights',
        name: 'DisabilityLawsAndRights',
        component: () =>
            import ( /* webpackChunkName: "career-resources" */ '../views/career-resources/DisabilityLawsAndRights.vue')
    },
    {
        path: '/career-resources/disclosure-and-accomodations',
        name: 'DisclosureAndAccomodations',
        component: () =>
            import ( /* webpackChunkName: "career-resources" */ '../views/career-resources/DisclosureAndAccomodations.vue')
    },
    {
        path: '/career-resources/internships-and-professional-opportunities',
        name: 'InternshipsAndProfessionalOpportunities',
        component: () =>
            import ( /* webpackChunkName: "career-resources" */ '../views/career-resources/InternshipsAndProfessionalOpportunities.vue')
    },
    {
        path: '/career-resources/job-search-resources',
        name: 'JobSearchResources',
        component: () =>
            import ( /* webpackChunkName: "career-resources" */ '../views/career-resources/JobSearchResources.vue')
    },



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    //base: publicPath,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            //reset focus
            document.body.setAttribute("tabindex", "-1");
            document.body.focus();
            document.body.removeAttribute("tabindex");
            console.log(from)
            console.log(to);
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 100,
            }
        } else {
            //reset focus
            document.body.setAttribute("tabindex", "-1");
            document.body.focus();
            document.body.removeAttribute("tabindex");
            //scroll to top
            return { left: 0, top: 0 }
        }
    }
})

export default router