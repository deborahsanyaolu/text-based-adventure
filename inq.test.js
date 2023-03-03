let {playerName, selectVehicle, selectWeapon, whichWay, confirmQuit} = require (`../functions/inq`)
const inquirer = require ('inquirer')
jest.mock('inquirer')

describe("playerName function test", () => {
    test("the users input with name 'deb'", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({playerName : 'deb'})

        await expect(playerName()).resolves.toEqual('deb')
    })

})

describe("selectVehicle function test", () => {
    test("the users route input with 'left'", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({whichWay: 'left'})
        await expect(whichWay()).resolves.toEqual('left')
    })
    test("the users route input with 'right'", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({whichWay: 'right'})
        await expect(whichWay()).resolves.toEqual('right')
    })
})

describe("pickWeapon function test", () => {
    test("the user selects sword", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({pickWeapon: 'sword' })
        
        await expect(pickWeapon([`sword`, `tennis racket`, `shoe`, `hanger`])).resolves.toEqual('sword')
    })

    test("the user selects tennis racket", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({pickWeapon: 'tennis racket' })
        
        await expect(pickWeapon([`sword`, `tennis racket`, `shoe`, `hanger`])).resolves.toEqual('tennis racket')
    })

    test("the user selects shoe", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({pickWeapon: 'shoe' })
    
        await expect(pickWeapon([`sword`, `tennis racket`, `shoe`, `hanger`])).resolves.toEqual('shoe')
    })

    test("the user selects sword", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({pickWeapon: 'sword' })
        
        await expect(pickWeapon([`sword`, `tennis racket`, `shoe`, `hanger`])).resolves.toEqual('sword')
    })

    test("the user selects hanger", async () => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({pickWeapon: 'hanger' })
        
        await expect(pickWeapon([`sword`, `tennis racket`, `shoe`, `hanger`])).resolves.toEqual('hanger')
    })
    })