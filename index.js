/*
 *   Copyright (c) 2021 Masaru Kitajima
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:

 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.

 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */
function dateccalc() {

  this.getJulian = function(year, month, day) {
    var stack = [];
    if (!isInteger(year)) {
      stack.push('year must be integer.');
    }
    if (!isInteger(month)) {
      stack.push('month must be integer.');
    }
    if (!isInteger(day)) {
      stack.push('day must be integer.');
    }
    if (!stack.length) {
      if (month < 1 || month > 12) {
        stack.push('month must be between 1 and 12.');
      }
    }
  };

  function isInteger(x) {
    return Math.round(x) === x;
  };

};