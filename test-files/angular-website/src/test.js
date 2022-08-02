"use strict";
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/testing");
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/platform-browser-dynamic/testing");
// First, initialize the Angular testing environment.
testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().forEach(context);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlHQUFpRzs7QUFFakcsMkJBQXlCO0FBQ3pCLG1EQUFtRDtBQUNuRCx1RUFHbUQ7QUFTbkQscURBQXFEO0FBQ3JELG9CQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FDOUIscUNBQTJCLEVBQzNCLHVDQUE2QixFQUFFLENBQ2hDLENBQUM7QUFFRiw4QkFBOEI7QUFDOUIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzNELHdCQUF3QjtBQUN4QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHJlcXVpcmVkIGJ5IGthcm1hLmNvbmYuanMgYW5kIGxvYWRzIHJlY3Vyc2l2ZWx5IGFsbCB0aGUgLnNwZWMgYW5kIGZyYW1ld29yayBmaWxlc1xuXG5pbXBvcnQgJ3pvbmUuanMvdGVzdGluZyc7XG5pbXBvcnQgeyBnZXRUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7XG4gIEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSxcbiAgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3Rpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3RpbmcnO1xuXG5kZWNsYXJlIGNvbnN0IHJlcXVpcmU6IHtcbiAgY29udGV4dChwYXRoOiBzdHJpbmcsIGRlZXA/OiBib29sZWFuLCBmaWx0ZXI/OiBSZWdFeHApOiB7XG4gICAgPFQ+KGlkOiBzdHJpbmcpOiBUO1xuICAgIGtleXMoKTogc3RyaW5nW107XG4gIH07XG59O1xuXG4vLyBGaXJzdCwgaW5pdGlhbGl6ZSB0aGUgQW5ndWxhciB0ZXN0aW5nIGVudmlyb25tZW50LlxuZ2V0VGVzdEJlZCgpLmluaXRUZXN0RW52aXJvbm1lbnQoXG4gIEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSxcbiAgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3RpbmcoKSxcbik7XG5cbi8vIFRoZW4gd2UgZmluZCBhbGwgdGhlIHRlc3RzLlxuY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuc3BlY1xcLnRzJC8pO1xuLy8gQW5kIGxvYWQgdGhlIG1vZHVsZXMuXG5jb250ZXh0LmtleXMoKS5mb3JFYWNoKGNvbnRleHQpO1xuIl19