//
//package com.idb.chainsupershopmanagement.config;
//
//import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
//
//import javax.servlet.Filter;
//
//
//public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer{
//
//    @Override
//    protected Class<?>[] getRootConfigClasses() {
//       return new Class[]{AppConfigDis.class};
//    }
//
//    @Override
//    protected Class<?>[] getServletConfigClasses() {
//            return null;
//    }
//
//    @Override
//    protected String[] getServletMappings() {
//        return new String[]{"/"};
//    }
//
//    @Override
//    protected Filter[] getServletFilters() {
//        Filter [] singleton = {new CORSFilter()};
//        return singleton;
//    }
//
//
//}
