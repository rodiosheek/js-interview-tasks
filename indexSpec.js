console.log('hellp Spec');

import { assert, expect } from 'chai';
import chai from 'chai';

chai.should();
//
//
// describe('Init tests', () => {
//     it('Test assert', () => {
//         let a = 2;
//         assert.equal(a, 2);
//     })
//     it('Test should', () => {
//         let a = 2;
//         a.should.equal(2);
//     })
//     it('Test expect', () => {
//         let a = 2;
//         expect(a).to.equal(2);
//     })
// });
//
// import myReduce from './tasks/Array-my-reduce';
//
// describe('Test myReduce', () => {
//
//     it('Method myReduce exist in Array', () => {
//         let exist = 'myReduce' in new Array();
//         assert.equal(exist, true);
//     });
//
//     it('[1,2,3] reduce = 6', () => {
//
//         let result = [1, 2, 3].myReduce((a, b) => a + b, 0);
//
//         assert.equal(result, 6);
//     });
// });
//
import add from './tasks/Add-function';

describe('Test add function', () => {

    it('add(1,2) = 3', () => {

        let result = add(1, 2);

        assert.equal(result, 3);
    });

    it('add(1)(2) = 3', () => {

        let result = add(1)(2);

        assert.equal(result, 3);
    });

    it('add(5,4) = 9', () => {

        let result = add(5, 4);

        assert.equal(result, 9);
    });

    it('add(5)(4) = 9', () => {

        let result = add(5)(4);

        assert.equal(result, 9);
    });

});
//
// import uniqModule from './tasks/Uniq-char';
//
// describe('Test uniq function ', () => {
//
//     it('ABCDA uniq = ABCD', () => {
//
//         let result = uniqModule.uniqHash('ABCDA');
//
//         assert.equal(result, 'ABCD');
//     });
//
//     it('BCBDC uniq = BCD', () => {
//
//         let result = uniqModule.uniqHash('BCBDC');
//
//         assert.equal(result, 'BCD');
//     });
//
//     it('AAAAAA uniq = A', () => {
//
//         let result = uniqModule.uniqHash('AAAAAA');
//
//         assert.equal(result, 'A');
//     });
//
//     it('AAAAAA uniqChar = A', () => {
//
//         let result = uniqModule.uniqChars('AAAAAA');
//
//         assert.equal(result, 'A');
//     });
//
//     it('ABCDA uniqChar = BCD', () => {
//
//         let result = uniqModule.uniqChars('ABCDA');
//
//         assert.equal(result, 'BCD');
//     });
//
//     it('BCBDC uniqChar = D', () => {
//
//         let result = uniqModule.uniqChars('BCBDC');
//
//         assert.equal(result, 'D');
//     });
//
// });
//
// import isPrime from './tasks/Is-prime';
//
// describe('isPrime - return true if number is prime, false - if not.', () => {
//
//     it('isPrime(-1) => false', () => {
//
//         let result = isPrime(0);
//
//         assert.equal(result, false);
//     });
//
//     it('isPrime(0) => false', () => {
//
//         let result = isPrime(0);
//
//         assert.equal(result, false);
//     });
//
//     it('isPrime(17) => true', () => {
//
//         let result = isPrime(17);
//
//         assert.equal(result, true);
//     });
//
//     it('isPrime(6) => false', () => {
//
//         let result = isPrime(6);
//
//         assert.equal(result, false);
//     });
//
//
//     it('isPrime(10000000000000) => false', () => {
//
//         let result = isPrime(10000000000000);
//
//         assert.equal(result, false);
//     });
//
//     it('isPrime(107) => true', () => {
//
//         let result = isPrime(107);
//
//         assert.equal(result, true);
//     });
// });
//
// import { fibRecursion, fibLoop, longFib } from './tasks/Fibonacci';
//
// describe('Calculate Fibonacci number. (fibRecursion(n))', () => {
//
//     describe('With recurtion.', () => {
//         it('fibRecursion(0) => 0', () => {
//
//             let result = fibRecursion(0);
//
//             assert.equal(result, 0);
//         });
//
//         it('fibRecursion(1) => 1', () => {
//
//             let result = fibRecursion(1);
//
//             assert.equal(result, 1);
//         });
//
//         it('fibRecursion(10) => 55', () => {
//
//             let result = fibRecursion(10);
//
//             assert.equal(result, 55);
//         });
//
//         it('fibRecursion(20) => 6765', () => {
//
//             let result = fibRecursion(20);
//
//             assert.equal(result, 6765);
//         });
//
//
//     });
//
//     describe('With loop. (fibLoop(n))', () => {
//         it('fibLoop(0) => 0', () => {
//
//             let result = fibLoop(0);
//
//             assert.equal(result, 0);
//         });
//
//         it('fibLoop(1) => 1', () => {
//
//             let result = fibLoop(1);
//
//             assert.equal(result, 1);
//         });
//
//         it('fibLoop(10) => 55', () => {
//
//             let result = fibLoop(10);
//
//             assert.equal(result, 55);
//         });
//
//         it('fibLoop(20) => 6765', () => {
//
//             let result = fibLoop(20);
//
//             assert.equal(result, 6765);
//         });
//
//         it('fibLoop(50) => 12586269025', () => {
//
//             let result = fibLoop(50);
//
//             assert.equal(result, 12586269025);
//         });
//     });
//
//     describe('With memoization, for Fibonacci number > 50. (longFib(n))', () => {
//         it('longFib(0) => 0', () => {
//
//             let result = longFib(0);
//
//             assert.equal(result, 0);
//         });
//
//         it('longFib(1) => 1', () => {
//
//             let result = longFib(1);
//
//             assert.equal(result, 1);
//         });
//
//         it('longFib(10) => 55', () => {
//
//             let result = longFib(10);
//
//             assert.equal(result, 55);
//         });
//
//         it('longFib(20) => 6765', () => {
//
//             let result = longFib(20);
//
//             assert.equal(result, 6765);
//         });
//
//         it('longFib(50) => 12586269025', () => {
//
//             let result = longFib(50);
//
//             assert.equal(result, 12586269025);
//         });
//
//         it('longFib(500) => 1.394232245616977e+104', () => {
//
//             let result = longFib(500);
//
//             assert.equal(result, 1.394232245616977e+104);
//         });
//     });
//
// });
//
// import { filter, myFilter } from './tasks/My-filter';
//
// describe('My filter function, like Array.filter().', () => {
//     it('filter([1,2,3,4], n => n < 3) => [1, 2]', () => {
//
//         let result = filter([1, 2, 3, 4], n => n < 3);
//
//         expect(result).to.deep.equal([1, 2]);
//     });
//
//     describe('myFilter in Array.__proto__', () => {
//         it('myFilter in Array', () => {
//
//             let exist = 'myReduce' in new Array();
//
//             assert.equal(exist, true);
//         });
//
//         it('[1,2,3,4].myFilter(n => n < 3); => [1,2]', () => {
//
//             let result = [1, 2, 3, 4].myFilter(n => n < 3);
//
//             expect(result).to.deep.equal([1, 2]);
//         });
//     })
//
// });
//
// import isSorted from './tasks/Issorted';
//
// describe('Function isSorted return true if array is sorted, false if not. isSorted(array)', () => {
//     it('isSorted([]) => true', () => {
//         let result = isSorted([]);
//
//         assert.equal(result, true);
//     });
//
//     it('isSorted([-Infinity, -5, 0, 3, 9]) => true', () => {
//         let result = isSorted([-Infinity, -5, 0, 3, 9]);
//
//         assert.equal(result, true);
//     });
//
//     it('isSorted([3, 9, -3, 10]) => false', () => {
//         let result = isSorted([3, 9, -3, 10]);
//
//         assert.equal(result, false);
//     });
// })
//
// import isPalindrome from './tasks/Is-Palindrome';
//
// describe('Function isPalindrome return true if string is palindrome, false if not. isSorted(array)', () => {
//     it('isPalindrome("") => true', () => {
//         let result = isPalindrome('');
//
//         assert.equal(result, true);
//     });
//
//     it('isPalindrome("abcdcba") => true', () => {
//         let result = isPalindrome('abcdcba');
//
//         assert.equal(result, true);
//     });
//
//     it('isPalindrome("abcd") => false', () => {
//         let result = isPalindrome("abcd");
//
//         assert.equal(result, false);
//     });
//
//     it('isPalindrome("A man a plan a canal Panama") => true', () => {
//         let result = isPalindrome("A man a plan a canal Panama");
//
//         assert.equal(result, true);
//     });
// })
//
// import missing from './tasks/Missing';
//
// describe('Function missing return number that not exist in sequence. missing(array);', () => {
//     it('missing([])  => undefined', () => {
//         let result = missing([]);
//
//         assert.equal(result, 'undefined');
//     });
//
//     it('missing([1, 4, 3]) => 2', () => {
//         let result = missing([1, 4, 3]);
//
//         assert.equal(result, 2);
//     });
//
//     it('missing([2, 3, 4]) => 1', () => {
//         let result = missing([2, 3, 4]);
//
//         assert.equal(result, 1);
//     });
//
//     it('missing([5, 1, 4, 2]) => 3', () => {
//         let result = missing([5, 1, 4, 2]);
//
//         assert.equal(result, 3);
//     });
//
//     it('missing([1, 2, 3, 4]) => undefined', () => {
//         let result = missing([1, 2, 3, 4]);
//
//         assert.equal(result, 'undefined');
//     });
//
//     it('missing([2, 3, 7, 6, 1, 4]) => 5', () => {
//         let result = missing([2, 3, 7, 6, 1, 4]);
//
//         assert.equal(result, 5);
//     });
// });
//
// import { reverse, reverseWithLoop, reverseWithRecursion } from './tasks/Reverse';
//
// describe('Function to revers string, without String.revers(). reverse(string)', () => {
//     describe('With Array (split,reduce,join). reverse(string)', () => {
//         it('reverse("") => ""', () => {
//             let result = reverse('');
//
//             assert.equal(result, '');
//         });
//
//         it('reverse("abcdef") => "fedcba"', () => {
//             let result = reverse('abcdef');
//
//             assert.equal(result, 'fedcba');
//         });
//     })
//
//     describe('With loop. reverseWithLoop(string)', () => {
//         it('reverseWithLoop("") => ""', () => {
//             let result = reverseWithLoop('');
//
//             assert.equal(result, '');
//         });
//
//         it('reverseWithLoop("abcdef") => "fedcba"', () => {
//             let result = reverseWithLoop('abcdef');
//
//             assert.equal(result, 'fedcba');
//         });
//     })
//
//     describe('With recursion. reverseWithLoop(string)', () => {
//         it('reverseWithRecursion("") => ""', () => {
//             let result = reverseWithRecursion('');
//
//             assert.equal(result, '');
//         });
//
//         it('reverseWithRecursion("abcdef") => "fedcba"', () => {
//             let result = reverseWithRecursion('abcdef');
//
//             assert.equal(result, 'fedcba');
//         });
//     })
// })
//
// import indexOf from './tasks/IndexOf';
//
// describe('Function indexOf like Array.indexOf. indexOf(array, searchElement)', () => {
//     it('indexOf([1, 2, 3], 1) => 0', () => {
//         let result = indexOf([1, 2, 3], 1);
//
//         assert.equal(result, 0);
//     });
//
//     it('indexOf([1, 2, 3], 4) => -1', () => {
//         let result = indexOf([1, 2, 3], 4);
//
//         assert.equal(result, -1);
//     });
//
//     it('indexOf([], 4) => -1', () => {
//         let result = indexOf([], 4);
//
//         assert.equal(result, -1);
//     });
//
//     it('indexOf([4,5,3,2,5,6,2], 6) => -1', () => {
//         let result = indexOf([4, 5, 3, 2, 5, 6, 2], 6);
//
//         assert.equal(result, 5);
//     });
// })
//
// import { isBalanced, isBalanced2, isBalancedMap } from './tasks/IsBalanced';
//
// describe('Function isBalanced for braces (}{), isBalanced(string)', () => {
//     it("isBalanced('}{') => false", () => {
//         let result = isBalanced('}{');
//
//         assert.equal(result, false);
//     })
//
//     it("isBalanced('{{}') => false", () => {
//         let result = isBalanced('{{}');
//
//         assert.equal(result, false);
//     })
//
//     it("isBalanced('}{}{}{') => false", () => {
//         let result = isBalanced('}{}{}{');
//
//         assert.equal(result, false);
//     })
//
//     it("isBalanced('{}{{}}') => true", () => {
//         let result = isBalanced('{}{{}}');
//
//         assert.equal(result, true);
//     })
//
//     it("isBalanced('a{}}sdfas}asdf') => false", () => {
//         let result = isBalanced('a{}}sdfas}asdf');
//
//         assert.equal(result, false);
//     })
//
//     it("isBalanced('') => false", () => {
//         let result = isBalanced('');
//
//         assert.equal(result, false);
//     })
//
//     it("isBalanced('{}{}') => true", () => {
//         let result = isBalanced('{}{}');
//
//         assert.equal(result, true);
//     })
//
//     it("isBalanced('foo { bar { baz } boo }') => true", () => {
//         let result = isBalanced('foo { bar { baz } boo }');
//
//         assert.equal(result, true);
//     })
//
//     it("isBalanced('foo { bar { baz }') => false", () => {
//         let result = isBalanced('foo { bar { baz }');
//
//         assert.equal(result, false);
//     })
//
//     it("isBalanced('foo { bar } }') => false", () => {
//         let result = isBalanced('foo { bar } }');
//
//         assert.equal(result, false);
//     })
// })
//
// describe('Function isBalanced2 work with }{, ][, )(, isBalanced2(string)', () => {
//     it("isBalanced2('(foo { bar (baz) [boo] })') => true", () => {
//         let result = isBalanced2('(foo { bar (baz) [boo] })');
//
//         assert.equal(result, true);
//     })
//
//     it("isBalanced2('foo { bar { baz }') => false", () => {
//         let result = isBalanced2('foo { bar { baz }');
//
//         assert.equal(result, false);
//     })
//
//     it("isBalanced2('foo { (bar [baz] } )') => false", () => {
//         let result = isBalanced2('foo { (bar [baz] } )');
//
//         assert.equal(result, false);
//     })
//
//     it("isBalanced2('foo { bar { baz } boo }') => true", () => {
//         let result = isBalanced2('foo { bar { baz } boo }');
//
//         assert.equal(result, true);
//     })
// })
//
import uniqInArray from './tasks/Uniq-for-array';

describe('Function find unique elements in array. uniqInarray(array)', () => {
    it('uniqInarray([]) => []', () => {
        let result = uniqInArray([]);

        expect(result).to.deep.equal([]);
    })

    it('uniqInarray([1, 4, 2, 2, 3, 4, 8]) => [1, 4, 2, 3, 8]', () => {
        let result = uniqInArray([1, 4, 2, 2, 3, 4, 8]);

        expect(result).to.deep.equal([1, 4, 2, 3, 8]);
    })

    it('uniqInarray([1,1,1,1,1,1,1,1]) => [1]', () => {
        let result = uniqInArray([1, 1, 1, 1, 1, 1, 1, 1]);

        expect(result).to.deep.equal([1]);
    })
});
//
// import intersection from './tasks/Intersection';
//
// describe('Intersection function for 2 arrays. intersection(array_1, array_2)', () => {
//     it('intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]) => [4, 1]', () => {
//         let result = intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]);
//
//         expect(result).to.deep.equal([4, 1]);
//     })
//
//     it('intersection([1, 5, 4, 2], [7, 12]) => []', () => {
//         let result = intersection([1, 5, 4, 2], [7, 12]);
//
//         expect(result).to.deep.equal([]);
//     })
//
//     it('intersection([], [7, 12]) => []', () => {
//         let result = intersection([], []);
//
//         expect(result).to.deep.equal([]);
//     })
// });
//
// import permute from './tasks/Permute';
//
// describe('Function permute for finding all permutation of string, permute(string)', () => {
//     it("permute('') => []", () => {
//         let result = permute('');
//
//         expect(result).to.deep.equal([]);
//     })
//
//     it("permute('abc') => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']", () => {
//         let result = permute('abc');
//
//         let test = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
//         assert.includeDeepMembers(result, test)
//     })
//
// });
//
// import LinkedList from './tasks/LikedList';
//
// describe('class LinkedList, LinkedList(args)', () => {
//     describe('let list = new LinkedList(1,2,3);', () => {
//
//         let list = new LinkedList(1, 2, 3);
//
//         it('list.add(4) => undefined', () => {
//
//             assert.equal(list.add(4), undefined);
//
//         });
//
//         it('list.add(5) => undefined', () => {
//
//             assert.equal(list.add(5), undefined);
//
//         });
//
//         it('list.add(77) => undefined', () => {
//
//             assert.equal(list.add(77), undefined);
//
//         });
//
//         it('list.has(1) => true', () => {
//
//             assert.equal(list.has(1), true);
//
//         });
//
//         it('list.has(4) => true', () => {
//
//             assert.equal(list.has(4), true);
//
//         });
//
//         it('list.has(6) => false', () => {
//
//             assert.equal(list.has(6), false);
//
//         });
//
//         it('list.has(77) => true', () => {
//
//             assert.equal(list.has(77), true);
//
//         });
//     });
// });
//
// import HashMap from './tasks/HashMap';
//
// describe('Class HashMap.', () => {
//     let map = new HashMap();
//
//     it("map.set('abc', 123); => undefined", () => {
//
//         let result = map.set('abc', 123);
//
//         expect(result).to.equal(undefined);
//     })
//
//     it("map.set('foo', 'bar') => undefined", () => {
//
//         let result = map.set('foo', 'bar');
//
//         expect(result).to.equal(undefined);
//     })
//
//     it("map.set('foo', 'baz'); => undefined", () => {
//
//         let result = map.set('foo', 'baz');
//
//         expect(result).to.equal(undefined);
//     })
//
//     it("map.get('abc'); => 123", () => {
//
//         let result = map.get('abc')
//
//         expect(result).to.equal(123);
//     })
//
//     it("map.get('foo'); => 'baz'", () => {
//
//         let result = map.get('foo');
//
//         expect(result).to.equal('baz');
//     })
//
//     it("map.get('def') ; => undefined", () => {
//
//         let result = map.get('def');
//
//         expect(result).to.equal(undefined);
//     })
// });
//
// import BinarySearchTree from './tasks/BinarySearchTree';
//
// describe("Class binary search tree. let tree = new BinarySearchTree();", () => {
//     let tree = new BinarySearchTree();
//
//     it("tree.add(1,2,3,4) => undefined", () => {
//         let result = tree.add(1, 2, 3, 4);
//
//         expect(result).to.equal(undefined);
//     })
//
//     it("tree.add(5) => undefined", () => {
//         let result = tree.add(5);
//
//         expect(result).to.equal(undefined);
//     })
//
//     it("tree.has(2) => true", () => {
//         let result = tree.has(2);
//
//         expect(result).to.equal(true);
//     })
//
//     it("tree.has(5) => true", () => {
//         let result = tree.has(5);
//
//         expect(result).to.equal(true);
//     })
//
//     it("tree.size() => 5", () => {
//         let result = tree.size();
//
//         expect(result).to.equal(5);
//     })
//
//     it("tree.remove(3) => undefined", () => {
//         let result = tree.remove(3);
//
//         expect(result).to.equal(undefined);
//     })
//
//     it("tree.has(3) => false", () => {
//         let result = tree.has(3);
//
//         expect(result).to.equal(false);
//     })
//
//     it("tree.size() => 4", () => {
//         let result = tree.size();
//
//         expect(result).to.equal(4);
//     })
//
// });
//
// import reduceAsync from './tasks/reduceAsync';
//
// describe("Function reduceAsync, take array of Promises and return pormise objects.", () => {
//
//     var a = () => Promise.resolve('a')
//     var b = () => Promise.resolve('b');
//     var c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));
//
//     it("Initial data", () => {
//         var a = () => Promise.resolve('a')
//         var b = () => Promise.resolve('b');
//         var c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));
//     });
//
//     it("await reduceAsync([a, b, c], (acc, value) => [...acc, value], []) => ['a', 'b', 'c']", (done) => {
//         async function testReduceAsync() {
//             return await reduceAsync([a, b, c], (acc, value) => [...acc, value], []);
//         }
//
//         testReduceAsync().then(
//             data => {
//                 expect(data).to.deep.equal(['a', 'b', 'c']);
//                 done();
//             },
//             error => done(error)
//         );
//     })
//
//     it("await reduceAsync([a, b, c], (acc, value) => [...acc, value],  ['d']) => ['d', 'a', 'b', 'c']", (done) => {
//         async function testReduceAsync() {
//             return await reduceAsync([a, b, c], (acc, value) => [...acc, value], ['d']);
//         }
//
//         testReduceAsync().then(
//             data => {
//                 expect(data).to.deep.equal(['d', 'a', 'b', 'c']);
//                 done();
//             },
//             error => done(error)
//         );
//     })
// });
//
// import promiseSequenser from './tasks/Promise-sequenser';
//
// describe("Primise sequenser, run promises in order, promiseSequenser(promisesArray)", () => {
//     let a = () => Promise.resolve('a');
//     let b = () => Promise.resolve('b');
//     let c = () => Promise.resolve('c');
//
//     let initMessage = [
//         "Init date: ",
//         "let a = () => Promise.resolve('a');",
//         "let b = () => Promise.resolve('b');",
//         "let c = () => Promise.resolve('c');"
//     ].join(' ');
//
//     it(initMessage, () => {
//         let a = () => Promise.resolve('a');
//         let b = () => Promise.resolve('b');
//         let c = () => Promise.resolve('c');
//     })
//
//     it("await promiseSequenser([a, b, c]).then(data => data); => data == ['a', 'b', 'c']", (done) => {
//
//         promiseSequenser([a, b, c]).then(
//             data => {
//                 expect(data).to.deep.equal(['a', 'b', 'c']);
//                 done();
//             },
//             error => done(error)
//         );
//
//     });
//
//     it("await promiseSequenser([a, c, b]).then(data => data); => data == ['a', 'c', 'b']", (done) => {
//
//                 promiseSequenser([a, c, b]).then(
//                     data => {
//                         expect(data).to.deep.equal(['a', 'c', 'b']);
//                         done();
//                     },
//                     error => done(error)
//                 );
//
//             });
//
// });
//
