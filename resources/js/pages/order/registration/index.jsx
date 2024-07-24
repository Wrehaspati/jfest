import { Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { css, styled } from "@/root/stitches.config";
import { generateMetadata } from "@/utils/helper";
import { router, usePage } from "@inertiajs/react";

import ErrorMessage from "./shared/ErrorMessage";
import { InputOuterWrapper, InputWrapper } from "./shared/InputWrapper";

import HeaderSection from "./partials/HeaderSection";
import TeamSection from "./partials/TeamSection";

import withNavbarMobile from "@/hooks/hoc/withNavbarMobile";

import { Button } from "@/components/button";
import { TextInput } from "@/components/input";
import { Text } from "@/components/text";

const Container = styled("section", {
    display: "flex",
    flexDirection: "column",
    height: "max-content",
    padding: "5rem 5%",
    backgroundColor: "$white",
    "@desktop": { paddingTop: "9.5rem" },
    "@laptop": { paddingTop: "9rem" },
    "@tablet": { paddingTop: "8.5rem" },
    "@mobile": { paddingTop: "8rem" },
});

function toObject(data) {
    const result = {};

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const keys = key.split(".");
            let current = result;

            keys.forEach((nestedKey, index) => {
                if (!current[nestedKey]) {
                    current[nestedKey] = {};
                }

                if (index === keys.length - 1) {
                    current[nestedKey] = data[key];
                }

                current = current[nestedKey];
            });
        }
    }

    return result;
}

function OrderRegistrationPage({ data, links: { submitUrl }, meta }) {
    const isActivity = data.type.toLowerCase() === "activity";

    const { errors: baseErrors } = usePage().props;
    const [errors, setErrors] = useState(baseErrors);

    const initialValues = {
        email: "",
        name: "",
        phone: "",
        address: "",
        institution: null,
        instagram: null,
        nickname: null,
        teamName: null,
        teamMembers: new Array(
            data.min_participants === data.max_participants
                ? data.min_participants - 1
                : data.min_participants
        ).fill({
            name: null,
            instagram: null,
            nickname: null,
        }),
    };

    useEffect(() => {
        setErrors(toObject(baseErrors));
    }, [baseErrors]);

    function handleSubmitRegistrationsOrder(values) {
        return router.post(submitUrl, values);
    }

    return (
        <>
            {generateMetadata(meta.head)}
            <Container css={{ gap: "2rem" }}>
                <HeaderSection data={data} isActivity={isActivity} />
                { data.is_closed ? (
                    <Text css={{ color:"$secondary", overflow:"hidden", textAlign: "center" }}>Registration is Closed</Text>
                ) : (
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmitRegistrationsOrder}
                    >
                        {({ values, handleBlur, handleChange }) => {
                            return (
                                <Form
                                    className={css({
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.25rem",
                                        width: "50%",
                                        margin: "0 auto",
                                        "@mobile": { width: "80%" },
                                    }).toString()}
                                >
                                    <InputOuterWrapper>
                                        <InputWrapper>
                                            <TextInput
                                                name="email"
                                                placeholder="Ketikan email..."
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                css={{ width: "100%" }}
                                            />
                                            {errors.email && (
                                                <ErrorMessage msg={errors.email} />
                                            )}
                                        </InputWrapper>
                                    </InputOuterWrapper>
                                    {/* {data.use_name_field && (
                                    <InputOuterWrapper>
                                        <InputWrapper>
                                            <TextInput
                                                name="name"
                                                placeholder="Type your name here..."
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                css={{ width: "100%" }}
                                            />
                                            {errors.name && (
                                                <ErrorMessage msg={errors.name} />
                                            )}
                                        </InputWrapper>
                                    </InputOuterWrapper>
                                    )} */}
                                    {data.use_nickname_field && (
                                        <InputOuterWrapper>
                                            <InputWrapper>
                                                <TextInput
                                                    name="nickname"
                                                    placeholder="Ketikan nickname atau alias..."
                                                    value={values.nickname}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    css={{ width: "100%" }}
                                                />
                                                {errors.nickname && (
                                                    <ErrorMessage
                                                        msg={errors.nickname}
                                                    />
                                                )}
                                            </InputWrapper>
                                        </InputOuterWrapper>
                                    )}
                                    <InputOuterWrapper>
                                        <InputWrapper>
                                            <TextInput
                                                name="phone"
                                                placeholder="Ketikan nomor telepon..."
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                css={{ width: "100%" }}
                                            />
                                            {errors.phone && (
                                                <ErrorMessage msg={errors.phone} />
                                            )}
                                        </InputWrapper>
                                    </InputOuterWrapper>
                                    <InputOuterWrapper>
                                        <InputWrapper>
                                            <TextInput
                                                name="address"
                                                placeholder="Ketikan alamat tinggal..."
                                                value={values.address}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                css={{ width: "100%" }}
                                            />
                                            {errors.address && (
                                                <ErrorMessage msg={errors.address} />
                                            )}
                                        </InputWrapper>
                                    </InputOuterWrapper>
                                    {/* {data.use_institution_field && (
                                        <InputOuterWrapper>
                                            <InputWrapper>
                                                <TextInput
                                                    name="institution"
                                                    placeholder="Ketikan institusi (SMK/SMA/UMUM)..."
                                                    value={values.institution}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    css={{ width: "100%" }}
                                                />
                                                {errors.institution && (
                                                    <ErrorMessage
                                                        msg={errors.institution}
                                                    />
                                                )}
                                            </InputWrapper>
                                        </InputOuterWrapper>
                                    )} */}
                                    {data.use_instagram_field && (
                                        <InputOuterWrapper
                                            css={{
                                                display: 'flex',
                                                width: "100%",
                                            }}
                                        >
                                            <Text css={{ color: "$dark" }}>@</Text>
                                            <InputWrapper css={{ width: '100%' }}>
                                                <TextInput
                                                    name="instagram"
                                                    placeholder="Ketikan username Instagram..."
                                                    value={values.instagram}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    css={{ width: "100%" }}
                                                />
                                                {errors.instagram && (
                                                    <ErrorMessage
                                                        msg={errors.instagram}
                                                    />
                                                )}
                                            </InputWrapper>
                                        </InputOuterWrapper>
                                    )}
                                    {data.use_multi_participant &&
                                        values.teamMembers.length > 0 && (
                                            <InputOuterWrapper>
                                                <InputWrapper>
                                                    <TextInput
                                                        name="teamName"
                                                        placeholder="Ketikan nama tim yang diinginkan..."
                                                        value={values.teamName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        css={{ width: "100%" }}
                                                    />
                                                    {errors.teamName && (
                                                        <ErrorMessage
                                                            msg={errors.teamName}
                                                        />
                                                    )}
                                                </InputWrapper>
                                            </InputOuterWrapper>
                                        )}
                                    {data.use_multi_participant && (
                                        <TeamSection
                                            errors={errors}
                                            values={values}
                                            maxParticipants={data.max_participants}
                                            useInstagramField={
                                                data.use_instagram_field
                                            }
                                            useNicknameField={
                                                data.use_nickname_field
                                            }
                                        />
                                    )}
                                    <Button
                                        // color="light"
                                        css={{ marginTop: "2rem", "@mobile": {fontSize: "4vw"} }}
                                        type="submit"
                                        fullWidth
                                    >
                                        Order Now
                                    </Button>
                                </Form>
                            );
                        }}
                    </Formik>
                )}
            </Container>
        </>
    );
}

export default withNavbarMobile(OrderRegistrationPage);
