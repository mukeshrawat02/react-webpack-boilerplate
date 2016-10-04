'use strict';

import './styles/main.scss';

import React from "react";
import { render } from "react-dom";

import Layout from "layout";

const app = document.getElementById('app');

render(<Layout/>, app);