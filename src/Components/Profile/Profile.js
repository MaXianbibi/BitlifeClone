import React, { useState, useCallback } from "react";
import {faker} from '@faker-js/faker';
import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';

export const ProfileContext = React.createContext(null);

const generateProfile = () => {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const musicGenre = faker.music.genre();
    const moneyBalance = 0;
    const job = "unemployed"
    const propAvatar = {
        seed: firstName + lastName,
        radius: 50
    };
    const age = 1;

    const timeLine = [
       {age: 0,
        event: "Born",
        id: new Date().getTime()},
    ];

    return {
        email,
        firstName,
        lastName,
        sex,
        musicGenre,
        propAvatar,
        moneyBalance,
        timeLine,
        age,
        job
    };
}

const generateAvatar = (propsAvatar) => {
    const avatar = createAvatar(micah, {
        ...propsAvatar
    });
    return avatar.toDataUriSync();
}

export const ProfileProvider = ({ children }) => {
    const initialProfile = generateProfile();
    const initialAvatar = generateAvatar(initialProfile.propAvatar);

    const [profile, setProfile] = useState({
        ...initialProfile,
        avatarString: initialAvatar
    });

    const changeProfile = useCallback (() => {
        const newProfile = generateProfile();
        const newAvatar = generateAvatar(newProfile.propAvatar);
        setProfile({
            ...newProfile,
            avatarString: newAvatar
        });
    }, []);

    const addProps = useCallback((props) => {
        setProfile((prevProfile) => {
            const newProps = {
                ...prevProfile.propAvatar,
                ...props
            };
            const newAvatar = generateAvatar(newProps);
            return {
                ...prevProfile,
                avatarString: newAvatar,
                propAvatar: newProps
            };
        });
    }, []);

    const contextValue = {
        profile,
        changeProfile,
        addProps,
        setProfile
    };

    return (
        <ProfileContext.Provider value={contextValue}>
            {children}
        </ProfileContext.Provider>
    );
}